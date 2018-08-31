var fs = require('fs');
var storage = require('./storage');

// get package.json as json object
function getPackage () {
    const libName = storage.retrive('libName')
    if (!libName) {
        throw "Canot retrive 'libName'";
    }
    return JSON.parse(fs.readFileSync('./projects/' + libName + '/package.json'));
}
exports.getPackage = getPackage;

// extract project name from package.json
exports.getName = ()  =>{
    return getPackage().name;
}

// extract project version from package.json
exports.getVersion = () => {
    return getPackage().version;
}