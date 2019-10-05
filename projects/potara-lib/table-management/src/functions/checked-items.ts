/**
 * Compose array of checked or un-checked items function
 * @param currentChecked current checked items
 * @param checkItems selected checked items
 */
export function checkedItems(
  currentChecked: Array<string | number>,
  checkItems: string | number | Array<string | number>
): Array<string | number> {
  // check if payload is value or array
  if (typeof checkItems !== 'string' && typeof checkItems !== 'number') {
    // array of elements
    const selectedArray = checkItems;
    // check when elements are to added or removed
    if (currentChecked.length !== 0 && selectedArray.every(r => currentChecked.includes(r))) {
      // remove elements
      return currentChecked.filter(i => !selectedArray.includes(i));
    } else {
      // add elements
      return [...currentChecked, ...checkItems];
    }
  } else {
    // console.log(checkItems);
    // single element
    const checkedItemIndex = currentChecked.indexOf(checkItems);
    if (checkedItemIndex < 0) {
      // console.log([...currentChecked, checkItems]);
      return [...currentChecked, checkItems];
    } else {
      return currentChecked.filter((a, index) => index !== checkedItemIndex);
    }
  }
}
