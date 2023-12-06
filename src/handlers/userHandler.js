//GET
const {createUserDB} = require("../controlers/userControllers")
const getUsersHandler= (req, res)=>{ //RUTA


    const {name,race}= req.query;
    if(name) res.status(200).send(`Aqui esta el usuario ${name}`);


    res.status(200).send("Aqui estan todos lo usuarios"); //HANDLER
};

const getDetailHandler= (req, res)=>{ //RUTA
    const {id}= req.params;
    res.status(200).send(`Detalle del usuario ${id}`); //HANDLER
};


//Prueba lo anterior fue para ver aora este ps par acrear pero en forma deeejmplo
//POST
//Body puede venr por informacion de formualrio no te olvides del parseo a app.js
const createUserHandler= async(req, res)=>{ //RUTA
    const{name,email,phone}= req.body;
    try {
        const response = await createUserDB(name,email,phone)
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