// BorrowedBook Schema
const mongoose = require('mongoose');

const BorrowedBookSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    borrowDate: {
        type: Date,
        default: Date.now
    }
});

const BorrowedBook = mongoose.model('BorrowedBook', BorrowedBookSchema);

module.exports = BorrowedBook;
