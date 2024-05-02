const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/bookstoredb"

const connect_database = async() => {
    await mongoose.connect(connectionString).then(() => console.log("Database Connected Successfully!!"))
}

module.exports.connect_database = connect_database;