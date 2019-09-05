import { getProp } from './get-prop';
/**
 * dynamic sort
 * provide property name and then two object
 * dynamicSort(propertyName)(objA,objB)
 * @param property property
 */
export function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  /**
   * main function
   */
  return (a, b) => {
    const aa = getProp(a, property);
    const bb = getProp(b, property);
    return (aa < bb ? -1 : aa > bb ? 1 : 0) * sortOrder;
  };
}
