// import mongoose
const mongoose = require('mongoose');

// import config
const config = require('./utils/config') 

// require app
const app = require('./app')

console.log('Connecting to MongoDB')
// connect mongodb database
mongoose.connect(config.MONGODB_URI)
.then(() =>{
    console.log('Connected to MongoDB')

    // Start THE server
    app.listen(config.PORT, () => {
        console.log(`server is running on port ${config.PORT}`)
    })

})
.catch((error) => {
    console.log('Not connect to MongoDB :', error.message)
})
