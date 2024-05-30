// require express

const express = require('express')

// new express create app
const app = express();

// require cors
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

// use the cors middleware
app.use(cors());

//  use the express.json middleware
app.use(express.json());

//  define the endpoints 
app.use('/api/users', userRoutes)

// export the app
module.exports = app;