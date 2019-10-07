import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, skip, startWith } from 'rxjs/operators';
import { FormeTemplateService } from 'potara-lib/template-holder';
import { TablePageContent, TablePageSetup, TableTranslation, TableColumnParams } from '../../models';
import { parseDotNotation } from '../../functions/parse-dot-notation';

/**
 * MT Table base component
 */
@Component({
  selector: 'pot-mt-table',
  templateUrl: './mt-table.component.html',
  styleUrls: ['./mt-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MtTableComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * data to be shown
   */
  @Input()
  models: TablePageContent;

  /**
   * is loading
   */
  @Input()
  isLoading: boolean;

  /**
   * columns
   */
  @Input()
  columns: any[] = [];

  /**
   * all trips selected
   */
  @Input()
  tableSetup: TablePageSetup;

  /**
   * translations
   */
  @Input()
  translations: TableTranslation = {
    noElements: 'No items'
  };

  /**
   * filter output
   * { filterTerms?: string; take?: string; page?: string }
   */
  @Output()
  filterOutput: EventEmitter<any> = new EventEmitter();

  /**
   * checkbox output
   */
  @Output()
  checkboxOutput: EventEmitter<string | Array<string | number>> = new EventEmitter();

  /**
   * search box wrapper
   */
  @ViewChild('searchBox', { static: false }) searchInput: ElementRef;

  /**
   * ghosts elements
   */
  ghosts = new Array(10).fill(null);

  /**
   * Constructor
   */
  constructor(private service: FormeTemplateService) {}

  /**
   * On init
   */
  ngOnInit() {}

  /**
   * After view init
   */
  ngAfterViewInit() {
    fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        // skip first empty subscription
        skip(1),
        // auto destroy subscription
        untilDestroyed(this)
      )
      .subscribe(term => {
        this.filterOutput.emit({ filter: term });
      });
  }

  /**
   * page take change
   */
  takeChange(take: number) {
    this.filterOutput.emit({ take });
  }

  /**
   * page change
   */
  pageChange(page: number) {
    this.filterOutput.emit({ page });
  }

  /**
   * change sort
   */
  changeSort(sort: string) {
    this.filterOutput.emit({ sort });
  }

  /**
   * template discovering
   */
  findTemplate(template) {
    // x callback checkbox possibile
    // http://www.bentedder.com/angular-4-templates-passing-methods-context-ngTemplateOutlet-ngTemplateOutletContext/
    return template
      ? this.service.getTemplateRef(template)
      : this.service.getTemplateRef('basicTemplate');
  }

  /**
   * checkbox change
   * @param $event event
   */
  checkboxChange($event) {
    // if checkbox all select all current element list
    if ($event.startsWith('checkAll-')) {
      const idProperty = $event.replace('checkAll-', '');
      $event = this.models.items.map(x => parseDotNotation(x, idProperty));
    }
    this.checkboxOutput.emit($event);
  }

  /**
   * On destroy implementation
   */
  ngOnDestroy() {}
}
