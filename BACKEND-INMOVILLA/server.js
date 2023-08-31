// npx sequelize model:generate --name administrador --attributes Id_Admin:integer,Nombre_Admin:string,Email_Admin:string,Telefono_Admin:string
// Including dependencies 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgar = require('morgan');

app.set('port', process.env.PORT || 400)

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgar('dev'));

app.get('/', (req,res)=>{
    res.send({title:"Hola inmovilla"})
})

app.listen(app.get('port'), () =>{
    console.log(`Server running on localhost:${app.get('port')}`);
});