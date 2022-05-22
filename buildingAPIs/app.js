// * Const variables

const express = require('express');
require('dotenv').config();
const db = require('./db');

const app = express();

// open the db Connection
db();

// * Import all of my DAOs
const Game = require('./api/models/game/game.dao');

// * import the router factory function
const routerFactory = require('./api/router');

//app.use(JSON)

// Use the routes
app.use('/', routerFactory(Game));


app.listen(process.env.PORT, (err) => {
    const { PORT, SECRET } = process.env;
    if(err) throw err;
    console.log(`My secret is ${SECRET}`)
    console.log(`App listening on port ${PORT}.....`)
});



/*
? What is a common API function?
    Needs to fellow the Crud theory
    * Create 
        - Using a POST http method
    * Read
        - Using a GET http method
        - example "app.get('myroute')"
    * Update
        - Using PUT or POST http methods
    * Delete
        - Using Delete http method

    TODO Look up what CORS is and what is solves.....
*/
