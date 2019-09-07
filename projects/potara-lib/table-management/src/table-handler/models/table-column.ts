import { TableColumnType } from '../types';
import { TableColumnParams } from './table-column-params';

/**
 * Table column properties
 */
export interface TableColumn<T> {
  width?: number | string;
  colWidth?: string;
  template?: string;
  // key of generic / checked / nested property (customer.name)
  value?: keyof T | 'checked' | string;
  // if set override value as sort property
  sortProperty?: keyof T | 'checked' | string;
  displayedName?: string;
  type?: TableColumnType | string;
  unSortable?: boolean;
  params?: TableColumnParams<T>;
}
