const express = require('express');
const pug = require('pug');
const fs = require('fs');

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
    res.render('orders');
});

app.get('/products', (req, res, next) => {
    // Call the API from the back end
    // Get the products
    // Pass them to the features template
    const products = JSON.parse(fs.readFileSync('products.json', {
        encoding: 'utf8',
    }));
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

    //console.log(JSON.stringify(products[req.params.id]));

    res.render('cartOrder', {
        product: products[req.params.id - 1],
    });
});


// Have it grab what a user picks and add it to a json file through fs
// Then import it into orders


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`App listening on port ${port}...`)});



























    //  Dayana te extrano mucho. Desearia poder abrazarte y besarte