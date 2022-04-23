const express = require('express');
const pug = require('pug');
const fs = require('fs');

const port = 3000;
const app = express();

// App using middleware
app.use('/style', express.static('www'));

// Setting up Web Page routes
app.get('/', (req, res, next) => {
    const template = pug.compileFile('templates/title.pug');
    res.end(template());
});

app.get('/orders', (req, res, next) => {
    const template = pug.compileFile('templates/orders.pug');
    res.end(template());
});

app.get('/features', (req, res, next) => {
    const template = pug.compileFile('templates/features.pug');
    res.end(template());
});


app.listen(port, (err) => {
    if(err) throw err;
    console.log(`App listening on port ${port}...`)});