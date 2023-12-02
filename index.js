const app = require("./src/app")
const {conn} = require("./src/db")


app.get('/',(req,res)=>{
    res.send('Probando ruta con express')
})
app.listen(3001, ()=> {
    conn.sync({force:true});
    console.log('server conectado en el puerto 3001');
});
