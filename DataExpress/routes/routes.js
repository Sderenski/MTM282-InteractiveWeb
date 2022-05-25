const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home');
});

router.get('/books', (req, res, next) => {
    res.render('bookAPI')
});

router.get('/music', (req, res, next) => {
    res.render('musicAPI')
});

router.get('/musicAdd', (req, res, next) => {
    res.render('form')
});


module.exports = router;