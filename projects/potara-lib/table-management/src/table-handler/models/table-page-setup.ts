/**
 * page table model properties
 */
export interface TablePageSetup {
  idProperty: string;
  filterableProperties: string[];
  filter: string;
  page: number;
  take: number;
  sort: string[];
  checkedItems: Array<string | number>;
}
