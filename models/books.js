const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: String,
    print_year: String,
    date_published: Date
})

module.exports = mongoose.model("Book", BookSchema);