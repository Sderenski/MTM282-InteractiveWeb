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
    res.render('details-books', {idIndex: id});
});

router.get('/booksAdd', (req, res, next) => {
    res.render('form-books', {idIndex: null, conditional: false})
});

router.get('/books/edit/:id', (req, res, next) => {
    res.render('form-books', {idIndex: req.params.id, conditional: true})
});

router.get('/music', (req, res, next) => {
    res.render('musicAPI')
});

router.get('/musicAdd', (req, res, next) => {
    res.render('form-music', {idIndex: null, conditional: false})
});


router.get('/music/:id', (req, res, next) => {
    let id = req.params.id;
    res.render('details-music', {idIndex: id});
});

router.get('/music/edit/:id', (req, res, next) => {
    res.render('form-music', {idIndex: req.params.id, conditional: true})
});


module.exports = router;