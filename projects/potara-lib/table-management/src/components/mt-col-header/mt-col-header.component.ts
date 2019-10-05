import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ArrowDirection } from '../../types';
/**
 * MT table col header
 */
@Component({
  selector: 'app-col-header',
  template: `
    <span class="tappable" (click)="itemTap()">
      <fa-icon *ngIf="arrowDirection" [icon]="arrowDirection"></fa-icon>
      <ng-content></ng-content>
    </span>
  `,
  styles: [
    `
      .tappable {
        cursor: pointer;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MtColHeaderComponent {
  /**
   * arrow direction
   * possible values: undefined, arrow-up, arrow-down
   */
  arrowDirection: ArrowDirection;

  /**
   * sort property
   */
  _sortProperty: string;

  /**
   * SET sort property input
   */
  @Input('sortProperty')
  set sortProperty(value: string) {
    this._sortProperty = value;
  }

  /**
   * SET page sort input
   */
  @Input('pageSort')
  set pageSort(values: string[]) {
    // arguments validations
    if (!values || values.length === 0 || !this._sortProperty) {
      this.arrowDirection = undefined;
      return;
    }

    // main sort
    const regexp = new RegExp(`(-)?${this._sortProperty}$`);

    // looking for start item
    if (regexp.test(values[0])) {
      this.setArrowDirection(values[0]);
      return;
    }
    // secondary sort
    if (values[1] && regexp.test(values[1])) {
      this.setArrowDirection(values[1]);
      return;
    }
    // default callback
    this.arrowDirection = undefined;
  }

  /**
   * sortable input
   */
  @Input()
  sortable: boolean;

  /**
   * sort change output
   */
  @Output()
  sortChange: EventEmitter<string> = new EventEmitter();

  /**
   * item tap event handler
   */
  itemTap() {
    if (!this.sortable) {
      return;
    }
    this.sortChange.emit((this.arrowDirection === 'arrow-up' ? '-' : '') + this._sortProperty);
  }

  /**
   * set arrow direction
   */
  setArrowDirection(value: string) {
    if (value.startsWith('-')) {
      this.arrowDirection = 'arrow-down';
    } else {
      this.arrowDirection = 'arrow-up';
    }
  }
}
