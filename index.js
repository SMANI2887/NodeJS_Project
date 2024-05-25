// import mongoose
const mongoose = require('mongoose');

// import dotenv
require('dotenv').config();

// import mongodb database
mongoose.connect(`process.env.MONGODB_URI`);
