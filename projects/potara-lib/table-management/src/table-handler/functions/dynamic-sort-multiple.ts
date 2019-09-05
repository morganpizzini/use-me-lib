import { dynamicSort } from './dynamic-sort';
/**
 * dynamic multiple sort
 * provide property name and then two object
 * dynamicSort(propertyName)(objA,objB)
 * @param property property
 */
export function dynamicSortMultiple(x: string, y: string) {
  /*
   * save the arguments object as it will be overwritten
   * note that arguments object is an array-like object
   * consisting of the names of the properties to sort by
   */
  const props = arguments;
  /**
   * main function
   */
  return (obj1, obj2) => {
    let i = 0;
    let result = 0;
    const numberOfProperties = props.length;
    /* try getting a different result from 0 (equal)
     * as long as we have extra properties to compare
     */
    while (result === 0 && i < numberOfProperties) {
      result = dynamicSort(props[i])(obj1, obj2);
      i++;
    }
    return result;
  };
}
