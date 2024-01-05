
const {createPostDb} = require("../controlers/postControllers")
const createPostHandler= async(req, res)=>{ //RUTA

    const {title,body, userId}=req.body;
    try {
        const newPost = await createPostDb(title,body,userId);
        res.status(200).send(newPost); //HANDLER

    } catch (error) {
        res.status(400).send({error: error.message}); //HANDLER

    }
}



module.exports={
    createPostHandler,
}