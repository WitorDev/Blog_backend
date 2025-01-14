const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },  
    content: {
        type: String,
        required: true
    },  
    image_url: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;