const express = require('express');
const pug = require('pug');

const server = express();

server.set('view engine', 'pug');
server.use(express.static('public'));


server.get('/', (req, res, next) => {
  res.render('./main.pug');
});

server.get('/form', (req, res, next) => {
  res.render('./form.pug');
});

server.post('/form', (req, res, next) => {
  res.end('ok');
});

server.listen(3000, (err) => {
  console.log('Server listening at 3000...');
});