import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent, ToastService } from 'potara-lib';
// import { BaseComponent, ToastService } from 'potara-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableTranslation } from './page-translation';
import { TableColumn } from './table-column';
import { TablePageContent } from './table-page-content';
import { TablePageSetup } from './table-page-setup';

/**
 * base list page component class
 */
export class BaseListComponent extends BaseComponent {
  /**
   * is loading
   */
  isLoading$: Observable<boolean>;

  /**
   * page list
   */
  list$: Observable<TablePageContent>;

  /**
   * page table translations dictionary
   */
  translationsDict: TableTranslation;

  /**
   * table setup
   */
  tableSetup$: Observable<TablePageSetup>;

  /**
   * Constructor
   */
  constructor(protected modalService: NgbModal, toast: ToastService) {
    super(toast);
  }

  /**
   * Compose column array function
   */
  protected mapColumn<T>(cols: Observable<TableColumn<T>[]>): Observable<TableColumn<T>[]> {
    return cols.pipe(
      map((columns: TableColumn<T>[]) =>
        columns.map(x => {
          if (typeof x.width === 'string') {
            x.colWidth = 'w-' + x.width;
            return x;
          }
          x.colWidth = x.width ? 'col-' + x.width : 'col';
          return x;
        })
      )
    );
  }
  /**
   * reload list with toast
   */
  reloadList() {
    this.toast.info('Reloading..');
    this.loadList();
  }

  /**
   * Base method for filter list
   * @param event event
   */
  tableFilter(event: any) {}

  /**
   * base method for handle checkbox change
   * @param event checked elements
   */
  checkBoxChange(event: string | Array<string | number>) {}

  /**
   * Base method for get list
   */
  loadList() {}
}
