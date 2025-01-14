const mongoose = require('mongoose');
const { parse } = require('dotenv');
const Post = require('../../database/schemas/Post');

async function findAllPosts() {
    try {
        const posts = await Post.find({});
        return posts;
    } catch (error) {
        console.error(error);
        return
    }
}

async function findPostById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return console.log('Invalid id');
    } else {
        try {
            const post = await Post.findById(id);
            if (!post) {
                return console.log('Post not found');
            }
            console.log('Post found:', post);
            return post;
        } catch (error) {
            return console.error('Error finding post:', error);
        }
    }
}

async function createPost(post) {
    try {
        const newPost = await Post.create(post)
        console.log('Post created:', newPost);
        return newPost;
    } catch (error) {
        console.error('Error creating post:', error);
        return;
    }
}

async function deletePost(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return console.log('Invalid id');
    } else {
        try {
            const post = await Post.findByIdAndDelete(id);
            if (!post) {
                return console.log('Post not found');
            }
            console.log('Post deleted:', post);
            return post;
        } catch (error) {
            return console.error('Error deleting post:', error);
        }
    }    
}

async function updatePost(id, post) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return console.log('Invalid id');
    } else {
        try {
            const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
            if (!updatedPost) {
                return console.log('Post not found');
            }
            console.log('Post updated:', updatedPost);
            return updatedPost;
        } catch (error) {
            return console.error('Error updating post:', error);
        }
    }
}

module.exports = { 
    findAllPosts,
    findPostById,
    createPost,
    deletePost,
    updatePost
};  