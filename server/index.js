const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogs = require('./models/blog');

const app = express();
const PORT = 3001;

// Connect to mongodb
// const connection_url = 'mongodb+srv://dhrup:1234567890dhru@cluster0.gsf5c.mongodb.net/Notes?retryWrites=true&w=majority';
const connection_url = 'mongodb://localhost/blogs';

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to database'))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.get('/api/get', (req, res) => {

    // render all blog from db
    blogs.find({}, (err, data) => {
        // console.log('find');
        console.log(data);
        res.send(data);
    })
    
    // res.send('Hello world');
});

app.post('/api/create', (req, res) => {

    const author = req.body.author;
    const title = req.body.title;
    const text = req.body.text;

    // console.log(author + title + text);
    
    // post blog to db
    const blog = new blogs({
        title: title,
        author: author,
        body: text
    });
    blog.save();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});