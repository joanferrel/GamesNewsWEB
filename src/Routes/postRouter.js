const {Router} =require("express");
const {createPostHandler} =require("../handlers/postHandler")

const postRouter = Router();
//Lo de abajo esta en el handler:
/* const createPostHandler=(req, res)=>{ //RUTA
    res.status(200).send("creamos un usuario"); //HANDLER
}
 */

postRouter.post("/",createPostHandler );

module.exports =postRouter;