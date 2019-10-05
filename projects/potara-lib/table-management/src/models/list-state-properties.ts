/**
 * List property for table engine
 */
export interface ListStateProperties<T> {
  idProperty: keyof T;
  filterableProperties: Array<keyof T>;
}
