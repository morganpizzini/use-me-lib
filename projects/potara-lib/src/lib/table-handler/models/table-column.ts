import { TableColumnParams } from './table-column-params';

/**
 * Table column properties
 */
export interface TableColumn {
  width?: number | string;
  colWidth?: string;
  template?: string;
  value?: string;
  // if set override value as search property
  sortProperty?: string;
  displayedName?: string;
  type?: string;
  unSortable?: boolean;
  params?: TableColumnParams;
}
