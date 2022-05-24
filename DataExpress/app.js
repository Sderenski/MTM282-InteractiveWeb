const express = require('express');
require('dotenv').config();
const db = require('./db');

const app = express();
const pageRouter = require('./routes/routes');

const { PORT } = process.env;

// Importing all the data models and factories
const Book = require('./api/models/book/book.dao');
const Music = require('./api/models/music/music.dao');

const routerFactory = require('./api/router');

db();

// * Setting the View Engine
app.set('views', './templates');
app.set('view engine', 'pug');

// * Setting up the routes
// API routes
app.use('/', routerFactory(Book));
app.use('/', routerFactory(Music));

// Template routes for the pages
app.use('/', pageRouter);

app.use('/public', express.static('public'))

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App listening on port ${PORT}....`)
});