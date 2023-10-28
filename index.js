const app = require("./src/app")



app.get('/',(req,res)=>{
    res.send('Probando ruta con express')
})
app.listen(3001, ()=> console.log('server conectado en el puerto 3001'))
