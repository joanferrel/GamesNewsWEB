const {Router} =require("express");

const postRouter = Router();


postRouter.post("/users", (req, res)=>{ //RUTA
    res.status(200).send("creamos un usuario"); //HANDLER
});

module.exports =postRouter;