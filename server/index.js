const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = 3001;

// Connect to mongodb
const connection_url = 'mongodb+srv://dhrup:1234567890dhru@cluster0.gsf5c.mongodb.net/Notes?retryWrites=true&w=majority';

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to database'))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

    // render all blog from db

    res.send('Hello world');
});

app.post('/api/create', (req, res) => {

    const author = req.body.author;
    const title = req.body.title;
    const text = req.body.text;

    // console.log("data posted");
    // res.send('api/create');
    console.log(author + title + text);

    // post blog to db 

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});