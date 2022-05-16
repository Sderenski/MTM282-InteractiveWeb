const fs = require('fs');


let filePath = "./menu_json/menuB.json";
const products = JSON.parse(fs.readFileSync('products.json', {
    encoding: 'utf8',
}));

// Functions
function cartExists() {
    if(fs.existsSync('./cart.json')) return true;
    else return false;
}

module.exports.cartExists = cartExists;
module.exports.products = products;
module.exports.filePath = filePath;