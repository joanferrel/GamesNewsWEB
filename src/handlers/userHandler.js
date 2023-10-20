usersRouter.get("/users", (req, res)=>{ //RUTA
    res.status(200).send("Aqui estan todos lo usuarios"); //HANDLER
});

module.exports = usersRouter