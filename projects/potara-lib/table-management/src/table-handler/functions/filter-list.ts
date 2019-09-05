import { TablePageContent } from '../models/table-page-content';
import { TablePageSetup } from '../models/table-page-setup';
import { filterByKeys } from './filter-by-keys';
import { tableSort } from './table-sort';
/**
 * filter function
 */
export function filterList<T>(entities: T, tableSetup: TablePageSetup): TablePageContent {
  // paging
  const paging = (tableSetup.page - 1) * tableSetup.take;
  // items
  const items = filterByKeys(entities, tableSetup.filterableProperties, tableSetup.filter);
  // sorting
  if (items.length > 1 && tableSetup.sort.length > 0) {
    items.sort(tableSort(tableSetup.sort));
  }
  const result: TablePageContent = {
    items: items.slice(paging, paging + tableSetup.take).map(x => {
      // cast as string for perfect matches
      x.checked = tableSetup.checkedItems.indexOf('' + x[tableSetup.idProperty]) > -1;
      return x;
    }),
    itemsCount: items.length,
    checkedCount: tableSetup.checkedItems.length
  };
  result.allChecked = result.items.filter(x => x.checked).length === result.items.length;
  return result;
}
