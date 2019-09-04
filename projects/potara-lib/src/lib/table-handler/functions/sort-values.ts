/**
 * Returns array of current sort priority
 * @param sortValues current sort value
 * @param sort new asked sort
 */
export function sortValue(sortValues: string[], sort: string): string[] {
  if (!sort) {
    return sortValues;
  }
  // want to change sort direction
  // try to remove '-'
  const matchSortProperty = sort.startsWith('-') ? sort.slice(1) : sort;

  // compose regex
  const regexp = new RegExp(`(-)?${matchSortProperty}$`);

  // looking for start item
  const sameItemIndex = sortValues.findIndex(x => regexp.test(x));
  if (sameItemIndex === 0) {
    // replace at first value
    sortValues = [sort, ...sortValues.slice(1, 2)];
  } else {
    // insert as first item
    sortValues.unshift(sort);
    // pick just first 2 elements
    sortValues = sortValues.slice(0, 2);
  }
  return sortValues;
}
