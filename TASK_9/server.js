const express = require("express");
const fs = require("fs");
    
const app = express();
const jsonParser = express.json();
  
app.use(express.static(__dirname + "/public"));
const filePath = "students.json";
app.get("/api/students", function(req, res){
       
    const content = fs.readFileSync(filePath,"utf8");
    const students = JSON.parse(content);
    res.send(students);
});

// getting one student by id
app.get("/api/students/:id", function(req, res){
       
    const id = req.params.id;
    const content = fs.readFileSync(filePath, "utf8");
    const students = JSON.parse(content);
    let student = null;
    for(var i=0; i<students.length; i++){
        if(students[i].id==id){
            student = students[i];
            break;
        }
    }
    if(student){
        res.send(student);
    }
    else{
        res.status(404).send();
    }
});
// receiving sent data
app.post("/api/students", jsonParser, function (req, res) {
      
    if(!req.body) return res.sendStatus(400);
      
    const fistName= req.body.fistName;
    const secondName = req.body.secondName;
    const age= req.body.age;
    const speciality = req.body.speciality;

    let student = {fistName: fistName, secondName: secondName, age: age, speciality: speciality};
      
    let data = fs.readFileSync(filePath, "utf8");
    let students = JSON.parse(data);
      
    const id = Math.max.apply(Math,students.map(function(o){return o.id;}))
    student.id = id+1;
    students.push(student);
    data = JSON.stringify(students);
    fs.writeFileSync("students.json", data);
    res.send(student);
});

 // delete user by id
 app.delete("/api/students/:id", function(req, res){
       
    const id = req.params.id;
    let data = fs.readFileSync(filePath, "utf8");
    let students= JSON.parse(data);
    let index = -1;
    for(var i=0; i < students.length; i++){
        if(students[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        const student = students.splice(index, 1)[0];
        data = JSON.stringify(students);
        fs.writeFileSync("students.json", data);
        res.send(student);
    }
    else{
        res.status(404).send();
    }
});

//record change
app.put("/api/students", jsonParser, function(req, res){
       
    if(!req.body) return res.sendStatus(400);
      
    const studentId = req.body.id;
    const studentFistName= req.body.fistName;
    const studentSecondName = req.body.secondName;
    const studentAge= req.body.age;
    const studentSpeciality = req.body.speciality;
      
    let data = fs.readFileSync(filePath, "utf8");
    const students = JSON.parse(data);
    let student;
    for(var i=0; i<students.length; i++){
        if(students[i].id==studentId){
            student = students[i];
            break;
        }
    }
    if(student){
        student.fistName= studentFistName;
        student.secondName = studentSecondName;
        student.age= studentAge;
        student.speciality = studentSpeciality;
        data = JSON.stringify(students);
        fs.writeFileSync("students.json", data);
        res.send(student);
    }
    else{
        res.status(404).send(student);
    }
});
   
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});