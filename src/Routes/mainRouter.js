const {Router} = require ("express");

const usersRouter = require("./usersRouter");
const postRouter = require("./postRouter");



const mainRouter = Router();

//Error2
//Este usersRouter tiene que tene el mismo nombre que el archivo
mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postRouter);
module.exports = mainRouter;