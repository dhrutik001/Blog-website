const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    like: {
        type:Number,
        default: 0        
    }
}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;
