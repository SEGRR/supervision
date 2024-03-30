const mongoose = require("mongoose");
const express = require("express");
const Teacher = require("./models/teacher");
const app = express();
const bodyParser = require("body-parser");
const {MakeSchedule} = require("./scheduler");
const supervisionSchema = require("./models/supervision");
const cors = require('cors');

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

app.get("/supervision",async (req ,res) => {
    try{
    const sch = await supervisionSchema.find().select(["-schedule" , "-teacherWiseSchedule"]);

     res.json(sch);
    }
    catch(error){
        res.json({error:error.message});
    }  
});

app.get("/supervision/:id",async (req ,res) => {
    const {id} = req.params;
    try{
    const sch = await supervisionSchema.findById(id);
        
     res.json(sch);
    }
    catch(error){
        res.json({error:error.message});
    }  
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

});

app.get("/teachers/edit",(req,res) => {
   
});

app.put("/teachers/edit/:id",async(req,res) => {
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

// app.delete("/teachers/delete/:id",async(req,res) => {
//     //delete from db
//     // const {id} = req.params;
//     // let deletedTeacher = await Teacher.findByIdAndDelete(id);
//     // res.json(deletedTeacher);
//     await Teacher.deleteMany({})
// });

// app.delete("/teachers/delete/",async(req,res) => {
//     await Teacher.deleteMany({})
//     res.send("done")
// });

app.delete("/teachers/delete/:id",async(req,res) => {
    await Teacher.deleteById()
    res.send("done")
});

app.post("/supervision/new", async (req,res) => {
    let  {title, subjects, blocks, year, paperPerDay, timeSlots, teacherList  } = req.body
    let schedule =   await MakeSchedule(title ,subjects ,blocks, year, paperPerDay , timeSlots , teacherList);
    res.json(schedule)
});






// UNDER WORK DONT USE
app.post("/schedules/save",async (req,res) => {
    let  {subjectsPerYear ,title, examDays, noOfBlocks, selectedYears, paperSlotsPerDay, paperTimeSlots , semester, teacherList , finalSchedule  } = req.body

    for(let y of selectedYears){
        let newSchedule = new supervisionSchema({title , y , paperSlotsPerDay , paperTimeSlots , schedule:finalSchedule[y] })
        await newSchedule.save();
    }

    // res.json(schedule);
});

app.delete('/schedules' , async(req ,res)=>{
     await supervisionSchema.deleteMany({});
     res.send("done")
});


app.listen(8080,() => {
    console.log("http://localhost:8080");
});