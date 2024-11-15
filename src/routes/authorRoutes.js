const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.post('/api/authors', authorController.createAuthor);
router.get('/api/authors', authorController.getAuthors);

module.exports = router;