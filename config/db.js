require('dotenv').config();
const mongoose = require('mongoose');
const url = "mongodb+srv://54321Boldoo:54321Boldoo@batbayr112.nndq93c.mongodb.net/file_transfer";
function connectDB() {
    // Database connection 🥳
    mongoose.connect(url, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).catch(err => {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;