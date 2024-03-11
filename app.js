const mongoose = require("mongoose");
const express = require("express");
const Teacher = require("./models/teacher");
const app = express();
const bodyParser = require("body-parser");
const scheduler = require("./scheduler");
const supervisionSchema = require("./models/supervision");
require('dotenv').config()
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

async function main(){
    mongoose.connect(process.env.mongoURL);
}

main().then(()=>{
    console.log("successful connection with db");
}).catch((err)=>{
    console.log(err);
});


app.get("/",(req,res) => {
    res.send("hello!");
});

app.get("/supervision",() => {
    //render dashboard
});

app.get("/teachers",async (req,res) => {
    //render teachers
    const teachers = await Teacher.find();
    // let jsonData = JSON.stringify(teachers);
    res.json(teachers);
});

app.get("/teachers/:id",async (req,res) => {
    console.log(req.params);
    const {id} = req.params;
    const teacher = await Teacher.findById(id);
    res.json(teacher);
});

app.get("/teachers/new",(req,res) => {
    //render form
});

app.post("/teachers/new",async (req,res) => {
    //  form -> get teacher info
    // insert in db

    const {name,designation,joiningDate,teachTo} = req.body;
    let newTeacher = new Teacher({
        name: name,
        designation: designation,
        joiningDate: joiningDate,
        teachTo: teachTo,
    });
    console.log(newTeacher);
    await newTeacher.save();
    res.json(newTeacher);
    // await Teacher.insertOne()
});

app.get("/teachers/edit",(req,res) => {
    //render form

});

app.post("/teachers/edit/:id",async(req,res) => {
    //update in db
    const {id} = req.params;
    const {name,designation,joiningDate,teachTo} = req.body;
    let updatedTeacher = {
        name: name,
        designation: designation,
        joiningDate: joiningDate,
        teachTo: teachTo
    }
    let teacher = await Teacher.findByIdAndUpdate(id,{...updatedTeacher});
    res.json(teacher);
})

app.get("/teachers/delete",() => {
    // render delete info
})

app.delete("/teachers/delete/:id",async(req,res) => {
    //delete from db
    // const {id} = req.params;
    // let deletedTeacher = await Teacher.findByIdAndDelete(id);
    // res.json(deletedTeacher);
    await Teacher.deleteMany({})
});

app.delete("/teachers/delete/",async(req,res) => {
    await Teacher.deleteMany({})
    res.send("done")
});

app.post("/supervision/new", async (req,res) => {
    let  {title, subjects, blocks, year, paperPerDay, timeSlots , semester, teacherList  } = req.body
    let schedule =   await scheduler(subjects ,blocks, paperPerDay , year , teacherList);
     res.json(schedule)
});




app.post("/schedules",async (req,res) => {
    let  {title, examDays, blocks, year, paperPerDay, timeSlots , semester, teacherList  } = req.body
    let schedule =   await scheduler(subjects ,blocks, paperPerDay , year , teacherList);

    // let newSchedule = new supervisionSchema({title , year , paperPerDay , timeSlots, semester , schedule })
    //  await newSchedule.save();
    res.json(schedule);
});

app.delete('/schedules' , async(req ,res)=>{
     await supervisionSchema.deleteMany({});
     res.send("done")
});


app.listen(8080,() => {
    console.log("http://localhost:8080");
});