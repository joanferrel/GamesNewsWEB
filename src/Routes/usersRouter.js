const {Router} = require ("express");
const usersRouter = Router();

//Error1
//TIenes dos errores:
//.---Aca puedes ver que usastes /users  pero eso estadefinido en usersRouter
//no es necesario que este en usersRouter
//usersRouter.get("/users", (req, res)=>{ //RUTA
//    res.status(200).send("Aqui estan todos lo usuarios"); //HANDLER
//}); 

//La solucion esta como lo ves aca abajo:
usersRouter.get("/", (req, res)=>{ //RUTA
    res.status(200).send("Aqui estan todos lo usuarios"); //HANDLER
});

usersRouter.get("/:id", (req, res)=>{ //RUTA
    res.status(200).send("detalle del usuario"); //HANDLER
});

module.exports = usersRouter;