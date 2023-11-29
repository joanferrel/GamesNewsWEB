const getUsersHandler= (req, res)=>{ //RUTA
    res.status(200).send("Aqui estan todos lo usuarios"); //HANDLER
};

const getDetailHandler= (req, res)=>{ //RUTA
    res.status(200).send("Detalle del usuario"); //HANDLER
};
module.exports = {
    getDetailHandler,
    getUsersHandler,
}