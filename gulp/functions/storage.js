// private storage variable
const storage = {};

/**
 * Store variable
 * 
 * @param {index} index 
 * @param {value} value 
 */
exports.store = (index,value) => {
    storage[index] = value;
    console.log(storage);
}

/**
 * Retrive variable
 * 
 * @param {index} index 
 */
exports.retrive = (index) => {
    return storage[index]
}