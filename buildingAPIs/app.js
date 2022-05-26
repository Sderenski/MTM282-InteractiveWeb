// * Const variables

const express = require('express');
require('dotenv').config();
const db = require('./db');
const argon2 = require('argon2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pug = require('pug');

const secretKey = 'whatever';

const app = express();

// open the db Connection
db();

// * Import all of my DAOs
const Game = require('./api/models/game/game.dao');

// * import the router factory function
const routerFactory = require('./api/router');
const res = require('express/lib/response');

// tell our server to accept JSON formatted post requests
app.use(express.json())

// tell our server to use pug as view engine
app.set('views', './views');
app.set('view engine', 'pug');

// Use the routes
app.use('/api', routerFactory(Game));

function waste(req, res, next) {
    console.log("THis is a complete waste of time");
    next();
}

app.get('/', (req, res, next) => {
    res.render('tables', {});
})

app.get('/game', (req, res, next) => {
    Game.read({}, (err, games) => {
        if(err) {
            res.end('Error with database');
            return;
        }
        res.render('games', {games});
    });
});

app.get('/game/:id', waste, (req, res) => {
    const { id } = req.params;
    Game.read({_id: id}, (err, game) => {
        if(err) {
            res.end("Failed to find id");
            return;
        }
        res.render('edit_game', {...game[0]});
    })
})

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
