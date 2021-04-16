require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogs = require('./models/blog');

// Initializing express app
const app = express();

// Environment variables
const PORT = process.env.PORT || 5000;
const DBURI = process.env.DBURI;

// Connection with mongodb
mongoose.connect(DBURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to database'))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.get('/api/get', (req, res) => {

    // render all blogs from db
    blogs.find({}, (err, data) => {
        // console.log('find');
        // console.log(data);
        res.send(data);
    })
    
    // res.send('Hello world');
});

app.get('/api/post/:id', (req, res) => {
    // render blog by Id from db

    const id = req.params.id;

    blogs.find({_id: id}, (err, data) => {
        // console.log('find');
        // console.log(data);
        res.send(data);
    })
    
    // // res.send('Hello world');
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
        body: text,
        like: 0
    });
    blog.save();
});

app.post('/api/like/:id', (req, res) => {
    const id = req.params.id;
    let likes;
    // console.log(likes);
    blogs.find({_id:id}, (err, data) => {
        if(err)
            likes = 0;
        else{
            likes = data[0].like;
        }
        blogs.updateOne({_id: id}, {like: likes+1}, (err)=>{
            // console.log(likes+1);
            if(err){
                console.log(err);
            }        
        });
    });

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});