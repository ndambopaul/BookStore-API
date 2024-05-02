const express = require("express");
const { borrowBook, borrowedBooks } = require("../controllers/borrowBooks");

const router = express.Router();

router.post("/borrow-book", borrowBook);
router.get("/borrowed-books", borrowedBooks);

module.exports = router;