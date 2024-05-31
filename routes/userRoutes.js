//  import express
const express = require('express');

//  import express Router
const userRoutes = express.Router();

//  import userController
const userController = require('../controllers/userController')
userRoutes.post('/signup',userController.signup);


//  export the userRoutes
module.exports = userRoutes;
