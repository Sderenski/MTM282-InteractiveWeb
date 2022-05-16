const express = require('express');
const pug = require('pug');

const productRouter = require('./Routes/products_route');

const port = 3001;
const app = express();


// * View Engine

app.set('views', './templates');
app.set('view engine', 'pug');


// * App using middleware

app.use('/style', express.static('www'));


// * Setting up Web Page routes

app.use('/', productRouter);


// Have it grab what a user picks and add it to a json file through fs
// Then import it into orders


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`App listening on port ${port}...`)});



























    //  Dayana te extrano mucho. Desearia poder abrazarte y besarte