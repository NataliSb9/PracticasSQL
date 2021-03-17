let mysql =  require("mysql");
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

//Reto 2.1

let getStudents = `SELECT student_id, mark FROM marks WHERE student_id BETWEEN "1" AND "20" OR mark > 8 AND date BETWEEN "2020-01-01" AND         "2020-12-31"`
connection.query(getStudents, function (err, resultado) {
    if (err) throw err;
    console.log("Busqueda realziada");
});

//Reto 2.2
let avgSubjects = `SELECT AVG(mark), subject_id FROM marks WHERE date BETWEEN "2020-01-01" AND "2020-12-31" GROUP BY subject_id
"AND "2020-12-31"`

connection.query(avgSubjects, function (err, resultado) {
    if (err) throw err;
    console.log("Busqueda realziada");
});

//Reto 2.3
let avgStudents = `SELECT AVG(mark), student_id FROM marks WHERE date BETWEEN "2020-01-01" AND "2020-12-31" GROUP BY student_id`
connection.end();

