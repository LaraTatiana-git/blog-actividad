const Post = require('../models/post');
const Author = require('../models/author');

exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: Author
        });
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getPostsByAuthor = async (req, res) => {
    try {
        const posts = await Post.findAll({
            where: { autor_id: req.params.authorId },
            include: Author
        });
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts by author:', error);
        res.status(500).json({ error: error.message });
    }
};