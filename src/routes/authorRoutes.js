const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.get('/', async (req, res, next) => {
    try {
        const authors = await Author.findAll();
        res.json(authors);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({
                error: 'Duplicate entry',
                message: error.errors[0].message
            });
        }
        next(error);
    }
});

module.exports = router;