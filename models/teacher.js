const mongoose = require("mongoose");
const Subjects = require("./subjects.js");

const teacherSchema = new mongoose.Schema({
    teacherId: Number,
    name:{
        type: String,
    },
    designation:{
        type: String
    },
    // dept: {
    //     type: String
    // },
    // subjects: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Subjects"
    // }],
    joining_date : {
        type: Date
    },
    teachTo : {
        type:[String],
        default:[]
    }
    
});

const Teacher = mongoose.model("Teacher",teacherSchema);
module.exports = Teacher;