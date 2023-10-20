const express = require("express");
const server = express()

server.get('/',(req,res)=>{
    res.send('Probando ruta con express')
})
server.listen(3001, ()=> console.log('server conectado en el puerto 3001'))
