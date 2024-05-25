// import mongoose
const mongoose = require('mongoose');

// import config
const config = require('./utils/config') 


// import mongodb database
mongoose.connect(config.MONGODB_URI)
.then(() =>{
    console.log('connect to MongoDB')
})
.catch((error) => {
    console.log('Not connect to MongoDB :', error.message)
})
