/**
 * get property from provided object
 * @object object
 * @path search property
 * @defaultVal default value
 */
export function getProp(object, path, defaultVal?) {
  const PATH = Array.isArray(path) ? path : path.split('.').filter(i => i.length);
  if (!PATH.length) {
    return object === undefined ? defaultVal : object;
  }
  if (object === null || object === undefined || typeof object[PATH[0]] === 'undefined') {
    return defaultVal;
  }
  return getProp(object[PATH.shift()], PATH, defaultVal);
}
