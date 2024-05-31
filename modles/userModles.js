


//  import mongoose
const mongoose = require('mongoose');

// import schema
const userSchema = new mongoose.Schema({
    username : String,
    name : String,
    passwordHash : String,
})

module.exports = mongoose.model('UserModles', userSchema, 'users');