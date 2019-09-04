import { dynamicSort } from './dynamic-sort';
import { dynamicSortMultiple } from './dynamic-sort-multiple';

/**
 * default sort function
 * @param values sort values
 */
export function tableSort(values: string | string[]) {
  if (typeof values === 'string') {
    return dynamicSort(values);
  } else {
    if (values.length === 1) {
      return dynamicSort(values[0]);
    } else {
      return dynamicSortMultiple(values[0], values[1]);
    }
  }
}
