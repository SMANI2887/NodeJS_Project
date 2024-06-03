// import userModels
const UserModles = require('../modles/userModles');
const jwt = require('jsonwebtoken')

// import bcrypt
const bcrypt = require('bcrypt')


const userController = {
    signup: async (request, response) => {
        try{
            // get the username, name, password from the request body
            const {username, name, password} = request.body;

            // if check username is already exists in the database
            const user = await UserModles.findOne({ username });

            // if the username already exists, return an error
            if(user){
                return response.status(400).json({ error: 'Username already exists'})

            }
            
            // if username unique , create new username

            // import hash password
            const passwordHash = await bcrypt.hash(password, 10);

            // create new user, username, name, hash password
            const newUser = new UserModles({
                username,
                name,
                passwordHash,
            });

            // save the user to the database
            const savedUser = await newUser.save();

            // return the saved user
            response.json({ message: 'User Created', users: savedUser})


        }catch(error){
            response.status(500).json({ message:error.message})
        }
    },

    signin: async (request, response) => {
        try {
            // get username ,password from the request body
            const { username, password } = request.body;
            

            // check if the user is exists in the database
            const user = await UserModles.findOne({ username });
            

            // if user not in database return error
            if(!user){
                return response.json({ error: 'user not found '})
            }
           
            // if user exists chect password is correct
            const passwordMatch = await bcrypt.compare(password,  user.passwordHash);
            
            // if password incorrect, return an error
            if(!passwordMatch){
                return response.json({ error: 'password is incorrect '})
            }

           

            // if password correct, generate token it jsonwebtoken
            const token = jwt.sign({
                id:user._id,
                username:user.username,
                name:user.name
            },process.env.JWT_SECRET);

            response.json({ message: 'user signed in', token, username: user.username, name: user.name,})
        }catch(error){
            // response.status(500).json({ error: request.body})

            response.status(500).json({ error: error.message })
        }

    }

    
}

module.exports = userController;