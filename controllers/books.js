const Book = require("../models/books");

const getBooks = async(req, res) => {
    const books = await Book.find({})

    return res.send({"count": books.length, "books": books}).status(200)
};

const createBook = async(req, res) => {
    const data = req.body;
    const book = await Book.create(data);
    return res.json(book).status(200);
};

const getBookById = async(req, res) => {
    const id = req.params.id;
    try {
        const book = await Book.findById({"_id": id});

        if (!book) {
            res.status(404).send({"error": `No book with id: ${id} found!!`})
        }
        return res.json(book).status(200)
    } catch (error) {
        console.log(`No book with id: ${id}`)
        res.status(500).send({"error": "Internal server error!!"})
    }
};

const updateBook = async(req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, {...data}, {new: true})

        if(!updatedBook){
            res.status(404).send({"error": `No book with id: ${id} found!!`})
        }
        res.json(updatedBook).sendStatus(200)
    } catch (error) {
        console.error('Error updating book:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteBook = async(req, res) => {
    const { id } = req.params
    try {
        const deleteBook = await Book.findByIdAndDelete({"_id": id})
        if (!deleteBook) {
            res.send({"error": "Book not found"}).status(404)
        }
        res.json({"message": `Book with id: ${id} has been deleted successfully`}).sendStatus(204)
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getBooks,
    createBook,
    getBookById,
    updateBook,
    deleteBook
}