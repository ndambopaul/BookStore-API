const express = require("express");

const { registerUser } = require("../auth/controllers/RegisterController");
const { loginUser } = require("../auth/controllers/LoginController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


module.exports = router;