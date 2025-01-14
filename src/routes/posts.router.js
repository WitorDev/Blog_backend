const postsServices = require('../services/posts.services');

const express = require('express');
const router = express.Router();

// Route to get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await postsServices.findAllPosts(); // Await the asynchronous call
        res.json(posts); // Send posts as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error: error.message });
    }
});

// Route to get a post by id
router.get('/:id', async (req, res) => {
    try {
        const post = await postsServices.findPostById(req.params.id); // Await the asynchronous call
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post); // Send the post as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const post = await postsServices.deletePost(req.params.id);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
});

router.post('/', async (req, res) => {
    const post = await postsServices.createPost(req.body);
    if (!post) {
        return res.status(500).json({ message: 'Error creating post' });
    }
    res.json(post); 
});

router.patch('/:id', async (req, res) => {
    const post = await postsServices.updatePost(req.params.id, req.body); // Await the asynchronous call
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post); // Send the post as JSON
});

module.exports = router;