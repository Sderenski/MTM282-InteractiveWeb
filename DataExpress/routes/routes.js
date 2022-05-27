const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home');
});

router.get('/books', (req, res, next) => {
    res.render('bookAPI')
});

router.get('/books/:id', (req, res, next) => {
    let id = req.params.id;
    res.render('book.details', {idIndex: id});
});

router.get('/booksAdd', (req, res, next) => {
    res.render('form-books')
});

router.get('/music', (req, res, next) => {
    res.render('musicAPI')
});

router.get('/musicAdd', (req, res, next) => {
    res.render('form-music')
});


router.get('/music/:id', (req, res, next) => {
    let id = req.params.id;
    res.render('details', {idIndex: id});
});


module.exports = router;