// import userModels
const UserModles = require('../modles/userModles')

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
    }

    
}

module.exports = userController;