/**
 * table columns param
 */
export interface TableColumnParams<T> {
  // date format and date zone
  format?: string;
  zone?: string;
  // checkbox entity to show
  entityToShare?: keyof T;
}
