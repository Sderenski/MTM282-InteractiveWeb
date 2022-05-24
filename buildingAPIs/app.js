// * Const variables

const express = require('express');
require('dotenv').config();
const db = require('./db');
const argon2 = require('argon2')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secretKey = 'whatever';

const app = express();

// open the db Connection
db();

// * Import all of my DAOs
const Game = require('./api/models/game/game.dao');

// * import the router factory function
const routerFactory = require('./api/router');
const res = require('express/lib/response');

app.use(express.json())

// Use the routes
app.use('/', routerFactory(Game));

// Basic Hashing of password
app.get('/auth/:pwd', (req, res, next) => {
    const { pwd } = req.params;
    bcrypt.hash(pwd, 15)
    .then((results) => {
        res.end(results);
    })
    .catch((err) => {
        console.log('hash failed: ', err);
        res.end('oops');
    });
})

app.post('/verify', (req, res, next) => {
    const { pwd, hash } = req.body;
    bcrypt.compare(pwd, hash)
    .then((isValid) => {
        if (isValid){
            res.end('Yay');
        } else {
            res.end('Boo');
        }
    })
    .catch((err) => {
        console.log('error validating password: ', err);
    });
});

app.get('/auth/:user/:pwd', (req, res, next) => {
    const { user, pwd } = req.params;
    if(user !== 'test' || pwd !== 'secret') {
        res.end('Invalid eusername and/or password');
    } 
    const token = jwt.sign({username: user}, secretKey);
    res.end(token)
});

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
