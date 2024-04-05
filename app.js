const mongoose = require("mongoose");
const express = require("express");
const Teacher = require("./models/teacher");
const app = express();
const bodyParser = require("body-parser");
const {MakeSchedule} = require("./scheduler");
const supervisionSchema = require("./models/supervision");
const cors = require('cors');

// add this obj to db

// {
//     "title": "unit test 2",
//     "selectedYears": [
//         "TE"
//     ],
//     "subjectsPerYear": {
//         "TE": "4"
//     },
//     "paperSlotsPerDay": "1",
//     "paperTimeSlots": [
//         {
//             "startTime": "13:53",
//             "endTime": "14:53"
//         }
//     ],
//     "noOfBlocksPerYear": {
//         "TE": "2"
//     },
//     "yearSchedule": [
//         {
//             "totalSlots": 8,
//             "schedule": {
//                 "2": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "5": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "6": [
//                     true,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     true
//                 ],
//                 "7": [
//                     false,
//                     true,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "8": [
//                     false,
//                     false,
//                     true,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "10": [
//                     false,
//                     false,
//                     false,
//                     true,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "11": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     true,
//                     false,
//                     false,
//                     false
//                 ],
//                 "12": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     true,
//                     false,
//                     false
//                 ],
//                 "13": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "20": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "23": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "24": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "27": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     true,
//                     false
//                 ],
//                 "30": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "32": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "33": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ]
//             },
//             "headers": {
//                 "days": [
//                     "Day1 ",
//                     "Day 2",
//                     "Day 3",
//                     "Day 4"
//                 ],
//                 "subjects": [
//                     "Subject 1",
//                     "Subject 2",
//                     "Subject 3",
//                     "Subject 4"
//                 ],
//                 "blocks": [
//                     "Block 1",
//                     "Block 1",
//                     "Block 1",
//                     "Block 1",
//                     "Block 1",
//                     "Block 1",
//                     "Block 1",
//                     "Block 1"
//                 ]
//             }
//         }
//     ]
//}



require('dotenv').config()
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

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

app.delete("/supervision/:id",async (req ,res) => {
    const {id} = req.params || req.body;
    try{
    const sch = await supervisionSchema.findByIdAndDelete(id);
        
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
    const {teacherId,name,designation,joiningDate,teachTo} = req.body;
    let newTeacher = new Teacher({
        teacherId,
        name,
        designation,
        joiningDate,
        teachTo
    });
    console.log(req.body);
    console.log(newTeacher);
   // await newTeacher.save();
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
    console.log(req.body);
    try{
    let  {title, subjectsPerYear, noOfBlocksPerYear, selectedYears, paperSlotsPerDay, paperTimeSlots, teacherList  } = req.body
    let schedule =   await MakeSchedule(title ,subjectsPerYear ,noOfBlocksPerYear, selectedYears, paperSlotsPerDay , paperTimeSlots , teacherList);
    res.json(schedule)
    }catch(error){
        res.json({error:error.message});
    }
});


app.get("/supervision/:id", async(req,res)=>{
    let {id} = req.params;
    try{
        let schedule =  await supervisionSchema.findById(id);
        res.json(schedule);
    }catch(error){
        res.status(400).json({error:error.message});

    }
})



// UNDER WORK DONT USE
app.post("/supervision/save",async (req,res) => {
    // let  {subjectsPerYear ,title, examDays, noOfBlocks, selectedYears, paperSlotsPerDay, paperTimeSlots , semester, teacherList , finalSchedule  } = req.body
    try{
        let newSchedule = new supervisionSchema({...req.body})
        await newSchedule.save();
        console.log('saved schedule' , newSchedule._id);
        res.json(newSchedule);
    }catch(error){
        res.status(400).json({error:error.message});
    }
    // res.json(schedule);
});

// app.delete('/schedules' , async(req ,res)=>{
//      await supervisionSchema.deleteMany({});
//      res.send("done")
// });


app.listen(8080,() => {
    console.log("http://localhost:8080");
});