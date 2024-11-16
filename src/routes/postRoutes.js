const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
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