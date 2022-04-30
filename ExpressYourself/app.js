const express = require('express');
const pug = require('pug');
const fs = require('fs');

const port = 3001;
const app = express();

let filePath = "./menuB.json";
const products = JSON.parse(fs.readFileSync('products.json', {
    encoding: 'utf8',
}));

// Functions
function cartExists() {
    if(fs.existsSync('cart.json')) return true;
    else return false;
}

// * View Engine

app.set('views', './templates');
app.set('view engine', 'pug');


// * App using middleware

app.use('/style', express.static('www'));


// * Setting up Web Page routes


app.get('/', (req, res, next) => {
    
    const menu = JSON.parse(fs.readFileSync(filePath, {
        encoding: 'utf8',
    }));
    res.render('title', {
        navList: menu,    
    });
});

app.get('/products', (req, res, next) => {
    // Call the API from the back end
    // Get the products
    // Pass them to the features template
    //console.log(JSON.stringify(products));
    const menu = JSON.parse(fs.readFileSync(filePath, {
        encoding: 'utf8',
    }));

    res.render('features', {
        navList: menu,
        products: products,
    });
});

// Order Cart Items
app.get('/product/:id?', (req, res, next) => {
    const menu = JSON.parse(fs.readFileSync(filePath, {
        encoding: 'utf8',
    }));

    res.render('cartOrder', {
        navList: menu,
        product: products[req.params.id - 1],
    });
});

// Writing the cart to json file, or appending it
app.get('/product/:id?/:quantity?', (req, res, next) => {

    // This still isn't working right.....
    let product = products[req.params.id - 1];
    if(req.params.quantity > 0){
        appendList = [];
        product.quantity = parseInt(req.params.quantity);
        if(cartExists()){
            const cart = JSON.parse(fs.readFileSync('cart.json', {
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
    filePath = './menuO.json';

    res.redirect('/products');
})

// Route for the order page
app.get('/orders', (req, res, next) => {

    const menu = JSON.parse(fs.readFileSync(filePath, {
        encoding: 'utf8',
    }));

    const cart = JSON.parse(fs.readFileSync('cart.json', {
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

// Grab the order form information....
app.post('/orders', express.json(), (req, res, next) => {

    const cart = JSON.parse(fs.readFileSync('cart.json', {
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

    filePath = "./menuB.json";

    res.json({value: "ok"});
});

// Have it grab what a user picks and add it to a json file through fs
// Then import it into orders


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`App listening on port ${port}...`)});



























    //  Dayana te extrano mucho. Desearia poder abrazarte y besarte