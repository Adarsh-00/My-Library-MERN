const express = require('express');
const mongoose = require('mongoose');
const Books = require('./model/bookModel');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const mongoUrl = process.env.MONGO_URL;


mongoose.connect(mongoUrl)
    .then(()=> console.log('db connected successfull'));


app.get('/', (req, res) => {
    res.send('<h1> working? </h1>')
});

app.get('/get-books', async (req, res) => {
    try {
        const books = await Books.find();
        if(books.length < 1) {
            res.status(404).send("<h1> No Record Found </h1>");
        }
        res.send(books);
    } catch (error) {
        res.send(`<h1> ${error.message} </h1>`);
    }
});

app.get('/get-books/:id', async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        if(book.length < 1) {
            res.status(404).send("<h1> No Record Found </h1>");
        }
        res.send(book);
    } catch (error) {
        res.send(`<h1> ${error.message} </h1>`);
    }
});

app.post('/add-book', async (req, res) => {
    const newbook = new Books(req.body);
    await newbook.save();
    res.json(newbook);

});

app.put('/update-book/:id', async(req, res) => {
    const updatedBook = await Books.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        published: req.body.published
    }, {new: true});

    res.send(updatedBook);

});

app.delete('/remove-book/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id)
    .then(() => res.send("book deleted successfully"))
    .catch((err)=> {
        res.send(err.message);
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> {
    console.log('listing...');

});
