import { escapeRegExp } from './escape-reg-exp';
import { getProp } from './get-prop';

/**
 * default filter functions
 * @param list list object
 * @param keys filterable properties
 * @param term term to search
 */
export function filterByKeys(list, keys: string[], term: string) {
  // arguments validation
  if (!term) {
    return list;
  }
  // create regex and escape search term
  const regexTerm = new RegExp(escapeRegExp(term), 'gi');
  return (list || []).filter(element =>
    keys.some(key => {
      const lookForValue = getProp(element, key);
      return lookForValue && regexTerm.test(lookForValue);
    })
  );
}
