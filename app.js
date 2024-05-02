const express = require("express");
const morgan = require("morgan");
const jwt = require('jsonwebtoken');

const PORT = 9000;
const app = express();

// Database Configuration
const { connect_database } = require("./db/connection");
connect_database();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan("short"));
const verifyToken = require("./middleware/authMiddleware");

// Imported Routes
const bookRoutes = require("./routes/books");
const authRoutes = require("./routes/auth");
const borrowedBooksRoutes = require("./routes/borrowedBooks");

// home route
app.get("/", (req, res) => {
    res.json({"message": "Server is up and running!!!"}).status(200);
});

app.get('/profile', verifyToken, (req, res) => {
    res.json({ user: req.user });
});

// books routes
app.use("/books", bookRoutes);
app.use("/loans", verifyToken, borrowedBooksRoutes)
// auth routes
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
})