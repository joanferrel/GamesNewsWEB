const {Router} = require ("express");


//Error1
//TIenes dos errores:
//.---Aca puedes ver que usastes /users  pero eso estadefinido en usersRouter
//no es necesario que este en usersRouter
//usersRouter.get("/users", (req, res)=>{ //RUTA
//    res.status(200).send("Aqui estan todos lo usuarios"); //HANDLER
//}); 

//La solucion esta como lo ves aca abajo:
// usersRouter.get("/", (req, res)=>{ //RUTA
//     res.status(200).send("Aqui estan todos lo usuarios"); //HANDLER
// });

// usersRouter.get("/:id", (req, res)=>{ //RUTA
//     res.status(200).send("detalle del usuario"); //HANDLER
// });
// Modularizado para el uso de handlers::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const {getDetailHandler,getUsersHandler, createUserHandler}= require("../handlers/userHandler");
const usersRouter = Router();
//IMPORTANTE
//Los hadlerseran convocados cuando lleguen al /"" o al /:id
//En los comentarios de arriba son la forma NO modularizada les creamos
// un espacio donde estaran los handlers osea acciones de lo que sucedera en es ruta
//solo ve a userHandler ahi esta lo mismo de arriba solo que en otrolugar
//Handler s eencarga de recibir la solicitud,unificar datomdevolver repeusta
//E activa a controller PERO NUNCA INTERACTUAN CON LA BASE DE DATOS O IP eso lo ara el controller
// El controller e otra funcion
usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", getDetailHandler);
usersRouter.post("/", createUserHandler);

module.exports = usersRouter;