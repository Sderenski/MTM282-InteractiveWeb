const express = require('express');
const pug = require('pug');
const fs = require('fs');

const port = 3001;
const app = express();
const products = JSON.parse(fs.readFileSync('products.json', {
    encoding: 'utf8',
}));

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
    //console.log(JSON.stringify(products));

    res.render('features', {
        products: products,
    });
});

// Order Cart Items
app.get('/product/:id?', (req, res, next) => {

    res.render('cartOrder', {
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
        if(fs.existsSync('cart.json')){
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
    console.log(product);

    res.redirect('/products');
})

// Have it grab what a user picks and add it to a json file through fs
// Then import it into orders


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`App listening on port ${port}...`)});



























    //  Dayana te extrano mucho. Desearia poder abrazarte y besarte