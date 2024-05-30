// require express

const express = require('express')

// new express create app
const app = express();

// require cors
const cors = require('cors');

// use the cors middleware
app.use(cors());

// export the app
module.exports = app;