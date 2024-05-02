const express = require("express");

const { getBooks, createBook, getBookById, updateBook, deleteBook } = require("../controllers/books");

const router = express.Router();

router.get("/", getBooks);
router.post("/", createBook);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;