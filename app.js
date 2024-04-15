const mongoose = require("mongoose");
const express = require("express");
const Teacher = require("./models/teacher");
const app = express();
const bodyParser = require("body-parser");
const { MakeSchedule } = require("./scheduler");
const Supervision = require("./models/supervision");
const cors = require("cors");
const Blocks = require("./models/examBlocks");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");
const supervisionSchema = require("./utils/supervisionSchema");
const teacherSchema = require("./utils/teacherSchema");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

async function main() {
  await mongoose.connect(process.env.mongoURL);
}

main()
  .then(() => {
    console.log("successful connection with db");
  })
  .catch((err) => {
    console.log(err);
  });

const validateReqBody = (req,res,next) => {
    let { error } = teacherSchema.validate(req.body);
    //console.log(error);
    console.log("in validate REq Body");
    if (error) {
      //console.log(error.details[0].message);
      return next(new ExpressError(400, error.details[0].message));
    }
}
app.get("/", (req, res) => {
  res.send("hello!");
});

/* Teacher Routes */

app.get(
  "/teachers",
  wrapAsync(async (req, res) => {
    const teachers = await Teacher.find();
    console.log("In /teachers");
    res.json(teachers);
  })
);

app.get(
  "/teachers/:id",
  wrapAsync(async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    
    const teacher = await Teacher.findById(id);
    res.json(teacher);
  })
);

app.post(
  "/teachers/new",
  validateReqBody,
  wrapAsync(async (req, res) => {
    
    const { teacherId, name, designation, joiningDate, teachTo } = req.body;
    let newTeacher = new Teacher({
      teacherId,
      name,
      designation,
      joiningDate,
      teachTo,
    });
    //console.log(req.body);
    console.log(newTeacher);
    await newTeacher.save();
    res.json(newTeacher);
  })
);

app.put(
  "/teachers/edit/:id",
  wrapAsync(async (req, res) => {
    //update in db
    const { id } = req.params;
    const { name, designation, joiningDate, teachTo } = req.body;
    let updatedTeacher = {
      name: name,
      designation: designation,
      joiningDate: joiningDate,
      teachTo: teachTo,
    };
    let teacher = await Teacher.findByIdAndUpdate(id, { ...updatedTeacher });
    res.json(teacher);
  })
);

app.delete(
  "/teachers/delete/:id",
  wrapAsync(async (req, res) => {
    //delete from db
    const { id } = req.params;
    let deletedTeacher = await Teacher.findByIdAndDelete(id);
    res.json(deletedTeacher);
  })
);


/* Supervision Routes */
app.post(
  "/supervision/new",
  wrapAsync(async (req, res, next) => {
    //console.log(req.body);
    let { error } = supervisionSchema.validate(req.body);
    //console.log(error);
    console.log("in validate REq Body");
    if (error) {
      //console.log(error.details[0].message);
      return next(new ExpressError(400, error.details[0].message));
    }
    let {
      title,
      subjectsPerYear,
      noOfBlocksPerYear,
      selectedYears,
      paperSlotsPerDay,
      paperTimeSlots,
      teacherList,
    } = req.body;
    console.log({
      title,
      subjectsPerYear,
      noOfBlocksPerYear,
      selectedYears,
      paperSlotsPerDay,
      paperTimeSlots,
      teacherList,
    });
    // validate data before sending
    let schedule = await MakeSchedule(
      title,
      subjectsPerYear,
      noOfBlocksPerYear,
      selectedYears,
      paperSlotsPerDay,
      paperTimeSlots,
      teacherList
    );
    console.log("got schedule");
    //console.log(schedule);
    res.json(schedule);
  })
);

app.get(
  "/supervision/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let schedule = await Supervision.findById(id);
    res.json(schedule);
  })
);

app.post(
  "/supervision/save",

  wrapAsync(async (req, res, next) => {
    // let  {subjectsPerYear ,title, examDays, noOfBlocks, selectedYears, paperSlotsPerDay, paperTimeSlots , semester, teacherList , finalSchedule  } = req.body
    let { error } = supervisionSchema.validate(req.body);
    //console.log("in validate REq Body");
    if (error) {
      return next(new ExpressError(400, error.details[0].message));
    }
    let newSchedule = new Supervision({ ...req.body });
    await newSchedule.save();
    console.log("saved schedule", newSchedule._id);
    res.json(newSchedule);
  })
);

app.get(
  "/supervision",
  wrapAsync(async (req, res) => {
    const sch = await Supervision.find().select(["-yearSchedule"]);
    res.json(sch);
  })
);

app.get(
  "/supervision/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const sch = await Supervision.findById(id);
    res.json(sch);
  })
);

app.delete(
  "/supervision/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params || req.body;
    const sch = await Supervision.findByIdAndDelete(id);

    res.json(sch);
  })
);

/* Seating Arrangement Routes */
app.post("/blocks/new", async (req, res) => {
  try {
    let newBlock = new Blocks({ ...req.body });
    await newBlock.save();
    console.log("saved schedule", newBlock._id);
    res.json(newBlock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/blocks/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let block = await Blocks.findById(id);
    res.json(block);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/blocks", async (req, res) => {
  try {
    let block = await Blocks.find();
    res.json(block);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/blocks/:id", async (req, res) => {
  try {
    let { classroom, capacity, id } = req.body;
    let block = await Blocks.findByIdAndUpdate(id, { classroom, capacity });
    res.json(block);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/blocks/:id", async (req, res) => {
  try {
    let block = await Blocks.findByIdAndDelete(id);
    res.json(block);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
  let { statusCode, message } = err;
  //res.status(statusCode).send(message);
  console.log("in err handler");
  console.log(err.message);
  res.json({ statusCode: statusCode, message: message });
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
