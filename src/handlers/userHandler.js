//GET
const {createUserDB, getUserById, getAllUsers,getUserByName} = require("../controlers/userControllers")


const getUsersHandler=  async (req, res)=>{ //RUTA

    const {name}= req.query;
    try {
        if (name) {
            const userByName = await getUserByName(name)
            res.status(200).json(userByName)
        } else {
            const response= await getAllUsers()
            res.status(200).json(response);
            
        }
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
};

const getDetailHandler= async(req, res)=>{ //RUTA
    const {id}= req.params;
    const source = isNaN(id) ? "bdd" : "api"
    try {
        const response = await getUserById(id,source);
        res.status(200).json(response)
        return;
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

};


//Prueba lo anterior fue para ver aora este ps par acrear pero en forma deeejmplo
//POST
//Body puede venr por informacion de formualrio no te olvides del parseo a app.js
const createUserHandler= async(req, res)=>{ //RUTA
    const{name,email,phone}= req.body;
    try {
        const response = await createUserDB(name,email,phone);
        res.status(200).json(response)
        return;
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
};

module.exports = {
    getDetailHandler,
    getUsersHandler,
    createUserHandler,
}