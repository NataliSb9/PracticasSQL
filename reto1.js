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

// 1.1 calculo de media:
/*let average = "SELECT AVG(mark)FROM marks WHERE subject_id=1"

connection.query(average, function (err, resultado) {
    if (err) throw err;
    console.log("Has calculado la media correctamente"+ average);
});
*/
//1.2 Calculo de alumnos en el bootcamp:

let count = "SELECT COUNT(*)FROM students"

connection.query(count, function (err, resultado) {
    if (err) throw err;
    console.log("Has calculado la media correctamente"+ average);
});


//1.3 Mostrar todo de los campos:
let showAll = "SELECT * FROM groups"

connection.query(showAll, function (err, resultado) {
    if (err) throw err;
    console.log("Has calculado la media correctamente");
});

//1.4 Eliminar notas por encima de 5 y del anyo pasado:

let removeMarks = "DELETE from marks WHERE mark>5 AND date = CURDATE()-1"

connection.query(removeMarks, function (err, resultado) {
    if (err) throw err;
    console.log("Has eliminado correctamente");
});

//1.5 Añadir un nuevo campo q sea anyo de ingreso y obten todos los estudiantes de 2021

//Altero la tabla de students:
let newField = "ALTER TABLE students ADD entryDate DATE"
connection.query(newField, function (err, resultado) {
    if (err) throw err;
    console.log("Actualizado correctamente");
});

//Creo el filtro para mostrar lo que pide:

let entryDate = `SELECT student_id FROM students WHERE entryDate BETWEEN ${2020-01-01} AND ${2020-12-31}`
connection.query(entryDate, function (err, resultado) {
    if (err) throw err;
    console.log("Actualizado correctamente");
});

//1.6 
let teacherByClass = `SELECT idTeacher, subject_id, COUNT(subject_id) FROM subject_teacher GROUP BY subject_id`
connection.query(teacherByClass, function (err, resultado) {
    if (err) throw err;
    console.log("Actualizado correctamente");
});
connection.end();
