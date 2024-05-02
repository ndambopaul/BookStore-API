const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now // Use a function to get the current timestamp dynamically
    }
});

module.exports = mongoose.model("User", UserSchema);