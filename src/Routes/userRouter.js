const {Router} = requiere ("express");
const usersRouter = Router();



usersRouter.get("/users", (req, res)=>{ //RUTA
    res.status(200).send("Aqui estan todos lo usuarios"); //HANDLER
});

usersRouter.get("/users/:id", (req, res)=>{ //RUTA
    res.status(200).send("detalle del usuario"); //HANDLER
});

module.exports = usersRouter;