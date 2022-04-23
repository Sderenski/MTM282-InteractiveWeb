// npm init -y
// npm install express

// module/library imports
const express = require('express');
const pug = require('pug');

// custom port and global variables
const port = 3000;

// create the app "object"
const app = express();


// custom middleware functions
// middleware functions are methods that handle requests before passing off to the repsonse functions
const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
}; 


// calling the middleware function
// app.use(logger);
app.use(express.json());

// Automatically adding routing through express
app.use('/clueless', express.static('templates'));

const compiledFunction = pug.compileFile('templates/template.pug');


// custom routes
// Also calling middleware functions in the route
app.get('/test', logger, express.json(), (request, response, next) =>{
    // Parameters to send to the browser
    response.end('Hello');

    // Response to the request
});

app.get('/demo', (req, res, next) => {
    res.end(compiledFunction({
        name: "David",
        thing: "school",
    }));
});

app.get('/another', (req, res, next) => {
    res.end('<p>This is another page</p>');
});

// Creating your own JSON Request....
app.get('/json', (req, res, next) => {
    const pokemon = {
        name: 'Pikachu',
        type: 'electric',
        weight: 234,
    };
    res.json(pokemon);
});


app.listen(port, (err) =>{
    if (err){
        console.log('Error Launching Server: ', err);
    }
    console.log(`Server is listening on port ${port}......`);
})