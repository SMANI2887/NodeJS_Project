// import mongoose
const mongoose = require('mongoose');

// import config
const config = require('./utils/config') 

console.log('Connecting to MongoDB')
// connect mongodb database
mongoose.connect(config.MONGODB_URI)
.then(() =>{
    console.log('Connected to MongoDB')
})
.catch((error) => {
    console.log('Not connect to MongoDB :', error.message)
})
