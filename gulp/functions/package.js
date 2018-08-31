var fs = require('fs');

// get package.json as json object
function getPackage () {
    return JSON.parse(fs.readFileSync('./package.json'));
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