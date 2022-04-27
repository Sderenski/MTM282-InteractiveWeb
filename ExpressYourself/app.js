const express = require('express');
const pug = require('pug');
const fs = require('fs');
const { isBuffer } = require('util');

const port = 3000;
const app = express();

app.set('views', './templates');
app.set('view engine', 'pug');

// App using middleware
app.use('/style', express.static('www'));

// Setting up Web Page routes
app.get('/', (req, res, next) => {
    res.render('title');
});

app.get('/orders', (req, res, next) => {
    const cart = JSON.parse(fs.readFileSync('cart.json', {
        encoding: 'utf8',
    }));
    var total = 0;
    cart.forEach(element => {
        total += element["price"] * element["quantity"];
        });

    res.render('orders', {
        numProducts: cart.length,
        products: cart,
        totalPrice: total,
    });
});

app.get('/products', (req, res, next) => {
    // Call the API from the back end
    // Get the products
    // Pass them to the features template
    const products = JSON.parse(fs.readFileSync('products.json', {
        encoding: 'utf8',
    }));

    //console.log(JSON.stringify(products));

    res.render('features', {
        products: products,
    });
});

// Order Cart Items
app.get('/product/:id?', (req, res, next) => {
    // Call API and fetch product data
    // Load the product template
    const products = JSON.parse(fs.readFileSync('products.json', {
        encoding: 'utf8',
    }));

    //console.log(JSON.stringify(products[req.params.id-1]));


    res.render('cartOrder', {
        product: products[req.params.id - 1],
    });
});

// Writing the cart to json file, or appending it
app.get('/product/:id?/:quantity?', (req, res, next) => {
    const products = JSON.parse(fs.readFileSync('products.json', {
        encoding: 'utf8',
    }));

    // This still isn't working right.....
    let product = products[req.params.id - 1];
    if(req.params.quantity > 0){
        product.quantity = parseInt(req.params.quantity);
        if(fs.existsSync('cart.json')){
            var appendList = [];
            const cart = JSON.parse(fs.readFileSync('cart.json', {
                encoding: 'utf8',
            }));
            appendList.push(cart);
            appendList.push(product);
            fs.writeFile('cart.json', JSON.stringify(appendList), (err) => {
                if(err) throw err;
            });
        } else{
            fs.writeFile('cart.json', JSON.stringify(product), (err) => {
                if(err) throw err;
            });
        }
    }
    console.log(product);

    res.redirect('/products');
})

// Have it grab what a user picks and add it to a json file through fs
// Then import it into orders


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`App listening on port ${port}...`)});



























    //  Dayana te extrano mucho. Desearia poder abrazarte y besarte