const {Router} = require ("express");

const userRouter = require("./userRouter");
const postRouter = require("./postRouter");



const mainRouter = Router();



mainRouter.use("/users", userRouter);
mainRouter.use("/posts", postRouter);
module.exports = mainRouter;