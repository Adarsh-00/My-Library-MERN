const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    published: {type: Number, required: true},
});

module.exports = mongoose.model('book', bookSchema);