//  import express
const express = require('express');

//  import express Router
const userRoutes = express.Router();

userRoutes.get('/',(request, response) => {
    response.send('userRoutes')
})

//  export the userRoutes
module.exports = userRoutes;
