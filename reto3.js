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

let getStudent = `SELECT *
FROM `marks` 
INNER JOIN `students` ON (students.student_id = marks.student_id)
INNER JOIN `subjects` ON (subjects.subject_id = marks.subject_id) WHERE subjects.title = "HTML" OR "Fundamentos de programacion"`


function bla (meh){
if(meh=="html" || "js"){
    console.log(true)
}else{
    console.log(false)
}
}
