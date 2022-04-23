const express = require('express');
const fs = require('fs');
const pug = require('pug');

const port = 3000;
const app = express();

// Usig middle ware
app.use('/secret', express.static('www'));


app.get('/', (req, res, next) => {
    fs.appendFile('sample.json', 'sample', (err) => {
        if (err){
            throw err;
        }
        res.end('Finished');
    });
});
app.get('/form', (req, res, next) => {
    const template = pug.compileFile('templates/base.pug');
    res.end(template({

    }));
});


app.post('/form', express.json(), (req, res, next) => {
    console.log(Object.keys(req));
    console.log('body: ', req.body);
    fs.writeFile('form.json', JSON.stringify(req.body), (err) => {
        if(err) throw err;
    });
    res.json({value: "ok"});
});



app.listen(port, (err) =>{
    if(err) throw err;
    console.log(`Server listening on port ${port}`);
});