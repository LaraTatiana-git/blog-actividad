// src/controllers/authorController.js
const Author = require('../models/author');

exports.createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};