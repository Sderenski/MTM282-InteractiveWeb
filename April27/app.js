const express = require('express');
const fs = require('fs');

const app = express();

// serve static pages from the public folder
app.use('/', express.static('public'));

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('App listening on port 3000...');
});