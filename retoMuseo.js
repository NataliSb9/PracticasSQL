let mysql =  require("mysql");
const { title } = require("node:process");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "centroestudios"
})
connection.connect(function(err){
    if(err){
        console.log("Error"+err)
    }else{
        console.log("Conexion correcta")
    }
})

connection.end();
