const express = require('express');
const router = express.Router();
const fs = require('fs');
const jsonFiles = require('./helper/json_functions');


// Logic for the routes.... Maybe find a way to build an 
// API to pass the data around

// TODO Find a way to modify just one json file for the nav things
// TODO this way It can be spilt up easier.... Thinking about appending the object


router.get('/', (req, res, next) => {
    
    const menu = JSON.parse(fs.readFileSync(jsonFiles.filePath, {
        encoding: 'utf8',
    }));
    res.render('title', {
        navList: menu,    
    });
});

router.get('/products', (req, res, next) => {
    // Call the API from the back end
    // Get the products
    // Pass them to the features template
    //console.log(JSON.stringify(products));
    const menu = JSON.parse(fs.readFileSync(jsonFiles.filePath, {
        encoding: 'utf8',
    }));

    res.render('features', {
        navList: menu,
        products: jsonFiles.products,
    });
});

// Order Cart Items
router.get('/product/:id?', (req, res, next) => {
    const menu = JSON.parse(fs.readFileSync(jsonFiles.filePath, {
        encoding: 'utf8',
    }));

    res.render('cartOrder', {
        navList: menu,
        product: jsonFiles.products[req.params.id - 1],
    });
});

// Writing the cart to json file, or appending it
router.get('/product/:id?/:quantity?', (req, res, next) => {

    // This still isn't working right.....
    let product = jsonFiles.products[req.params.id - 1];
    if(req.params.quantity > 0){
        appendList = [];
        product.quantity = parseInt(req.params.quantity);
        if(jsonFiles.cartExists()){
            const cart = JSON.parse(fs.readFileSync('./cart.json', {
                encoding: 'utf8',
            }));
            cart.push(product);
            fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
                if(err) throw err;
            });
        } else{
            appendList.push(product);
            fs.writeFile('cart.json', JSON.stringify(appendList), (err) => {
                if(err) throw err;
            });
        }
    }
    jsonFiles.filePath = './menu_json/menuO.json';

    res.redirect('/products');
})


// Orders from the products.
// TODO Figure out how to spilt the two and pass variables between
// Assuming it would be the through APIs to pass the data that is needed through
router.get('/orders', (req, res, next) => {

    const menu = JSON.parse(fs.readFileSync(jsonFiles.filePath, {
        encoding: 'utf8',
    }));

    const cart = JSON.parse(fs.readFileSync('./cart.json', {
        encoding: 'utf8',
    }));
    var total = 0;
    cart.forEach(element => {
        total += element["price"] * element["quantity"];
        });
    
    res.render('orders', {
        navList: menu,
        numProducts: cart.length,
        products: cart,
        totalPrice: total,
    });
});


router.post('/orders', express.json(), (req, res, next) => {

    const cart = JSON.parse(fs.readFileSync('./cart.json', {
        encoding: 'utf8',
    }));
    var total = 0;
    cart.forEach(element => {
        total += element["price"] * element["quantity"];
        });
    let orders = cart;
    orders.unshift(req.body);
    appendList = [];
    if(fs.existsSync('orders.json')){
        const orderList = JSON.parse(fs.readFileSync('orders.json', {
            encoding: 'utf8',
        }));
        orderList.push(orders);
        fs.writeFile('orders.json', JSON.stringify(orderList), (err) => {
            if(err) throw err;
        });
        fs.unlink('cart.json', (err) => {
            if(err) throw err;
        });
    } else{
        appendList.push(orders);
        fs.writeFile('orders.json', JSON.stringify(appendList), (err) => {
            if(err) throw err;
        });
        fs.unlink('cart.json', (err) => {
            if(err) throw err;
        });
    }

    jsonFiles.filePath = "./menu_json/menuB.json";

    res.json({value: "ok"});
});

module.exports = router;