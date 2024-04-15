const mongoose = require("mongoose");
const express = require("express");
const Teacher = require("./models/teacher");
const bodyParser = require("body-parser");
const {MakeSchedule} = require("./scheduler");
const supervisionSchema = require("./models/supervision");
const seatingArrangement = require('./models/seatingArrangement')
const cors = require('cors');
const Blocks = require("./models/examBlocks");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");
const Subjects = require("./models/subjects");

require('dotenv').config();
const app = express();

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


// Checkup route
app.get("/",(req,res) => {
    res.send("hello!");
});

// All schedule routes 

app.get("/supervision",wrapAsync(async (req ,res) => {
    const sch = await supervisionSchema.find().select(["-yearSchedule"]);
     res.json(sch);
}));

app.get("/supervision/:id",wrapAsync(async (req ,res) => {
    const {id} = req.params;
    const sch = await supervisionSchema.findById(id);
    res.json(sch); 
}));

app.delete("/supervision/:id",wrapAsync(async (req ,res) => {
    const {id} = req.params || req.body;
    const sch = await supervisionSchema.findByIdAndDelete(id);
        
     res.json(sch);
     
}));

app.post("/supervision/new", wrapAsync(async (req,res) => {
    console.log(req.body);
    let  {title, subjectsPerYear, noOfBlocksPerYear, selectedYears, paperSlotsPerDay, paperTimeSlots, teacherList  } = req.body
    let schedule =   await MakeSchedule(title ,subjectsPerYear ,noOfBlocksPerYear, selectedYears, paperSlotsPerDay , paperTimeSlots , teacherList);
    console.log(schedule);
    res.json(schedule);
}));


app.post("/supervision/save",wrapAsync (async (req,res) => {
    // let  {subjectsPerYear ,title, examDays, noOfBlocks, selectedYears, paperSlotsPerDay, paperTimeSlots , semester, teacherList , finalSchedule  } = req.body
    try{
        let newSchedule = new supervisionSchema({...req.body})
        await newSchedule.save();
        console.log('saved schedule' , newSchedule._id);
        res.json(newSchedule);
    }catch(error){
        res.status(400).json({error:error.message});
    }
    
}));




// Teacher routes 
app.get("/teachers",wrapAsync(async (req,res) => {
    //render teachers
    const teachers = await Teacher.find();
    // let jsonData = JSON.stringify(teachers);
    res.json(teachers);
}));

app.get("/teachers/:id",wrapAsync(async (req,res) => {
    console.log(req.params);
    const {id} = req.params;
    const teacher = await Teacher.findById(id);
    res.json(teacher);
}));



app.post("/teachers/new",wrapAsync(async (req,res) => {
    //  form -> get teacher info
    // insert in db
    const {teacherId,name,designation,joinDate,teachTo} = req.body;
    let newTeacher = new Teacher({
        teacherId,
        name,
        designation,
        joinDate,
        teachTo
    });
    console.log(req.body);
    console.log(newTeacher);
    await newTeacher.save();
    res.json(newTeacher);

}));

app.put("/teachers/edit/:id",wrapAsync(async(req,res) => {
    //update in db
    const {id} = req.params;
    const {name,designation,joinDate,teachTo} = req.body;
    let updatedTeacher = {
        name: name,
        designation: designation,
        joinDate: joinDate,
        teachTo: teachTo
    }
    let teacher = await Teacher.findByIdAndUpdate(id,{...updatedTeacher});
    res.json(teacher);
}));


app.delete("/teachers/delete/:id",wrapAsync(async(req,res) => {
    //delete from db
     const {id} = req.params;
     let deletedTeacher = await Teacher.findByIdAndDelete(id);
     res.json(deletedTeacher);
   
}));


app.post('/blocks/new', async(req ,res)=>{
    try{
        let newBlock = new Blocks({...req.body})
        await newBlock.save();
        console.log('saved schedule' , newBlock._id);
        res.json(newBlock);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

app.get("/blocks/:id", async(req,res)=>{
    let {id} = req.params;
    try{
        let block =  await Blocks.findById(id);
        res.json(block);
    }catch(error){
        res.status(400).json({error:error.message});

    }
});

app.get("/blocks", async(req,res)=>{
    try{
        let block =  await Blocks.find();
        res.json(block);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

app.put("/blocks/:id", async(req,res)=>{
    try{
        let {classroom , capacity , id} = req.body;
        let block =  await Blocks.findByIdAndUpdate(id , {classroom , capacity});
        res.json(block);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

app.delete("/blocks/:id", async(req,res)=>{
    try{
        let block =  await Blocks.findByIdAndDelete(id);
        res.json(block);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

app.all("*",(req,res,next) => {
    console.log('Error');
    next(new ExpressError(404,"Page not found!"));
});

app.use((err,req,res) => {
    let {statusCode,message} = err;
    //res.status(statusCode).send(message);
    res.json({statusCode:statusCode,message:message});
});


// routes for seating arrangement

app.post('/seatings/new' , async (req ,res)=>{
    // do some validations 
    let seating = new seatingArrangement({...req.body});
    await seating.save();
    res.json(seating);
});

app.get('/seatings' , async (req ,res)=>{
    
    let seating = await seatingArrangement.find();
    res.json(seating);
});

app.put('/seatings/:id' , async (req ,res)=>{
    
    let seating = await  seatingArrangement.findByIdAndUpdate(id , {...req.body , updated_on:Date.now()});
    res.json(seating);
});

app.get('/seatings/:id' , async (req ,res)=>{
    // do some validations 
    let {id} = req.params;
    if(!id){
        throw new Error('ID was not given in url');
    }
    let seating =  await seatingArrangement.findById(id);
    res.json(seating);
});

// routes for subjects

app.post('/subjects/new' , async (req ,res)=>{
    // do some validations 
    let sub = new Subjects({...req.body});
    await sub.save();
    res.json(sub);
});

app.get('/subjects' , async (req ,res)=>{
    
    let seating = await Subjects.find();
    res.json(seating);
});

app.get('/subjects/:branch/:year/:sem/' , async (req ,res)=>{
    let {Subjects , branch , year , sem} = req.params;
    let subjects = await Subjects.find({branch , year, semester:sem});
    res.json(subjects);
});

app.put('/subjects' , async (req ,res)=>{
    
    let seating = await  seatingArrangement.findByIdAndUpdate(id , {...req.body , updated_on:Date.now()});
    res.json(seating);
});

app.get('/subjects/:id' , async (req ,res)=>{
    // do some validations 
    let {id} = req.params;
    if(!id){
        throw new Error('ID was not given in url');
    }
    let seating =  await seatingArrangement.findById(id);
    res.json(seating);
});





app.listen(8080,() => {
    console.log("http://localhost:8080");
});