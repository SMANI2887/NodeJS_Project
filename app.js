// require express

const express = require('express')

// new express create app
const app = express();

// require cors
const cors = require('cors');

// use the cors middleware
app.use(cors());

//  use the express.json middleware
app.use(express.json());

//  define the endpoints 
app.get('/',(request, response) => {
    response.send('<h1>Hello World!!</h1>')
})

// export the app
module.exports = app;