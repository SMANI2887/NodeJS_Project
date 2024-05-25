// import mongoose
const mongoose = require('mongoose');

// import config
const config = require('./utils/config') 


// import mongodb database
mongoose.connect(`config.MONGODB_URI`);
