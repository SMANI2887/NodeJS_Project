const userController = {
    signup: async (request, response) => {
        try{
            response.json({ message:"signup routes" })
        }catch(error){
            response.status(500).json({ message:error.message})
        }
    } 
}

module.exports = userController;