const mongoose = require("mongoose");
const Subjects = require("./subjects.js");

const teacherSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    designation:{
        type: String
    },
    dept: {
        type: String
    },
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: "Subjects"
    }],
    joining_data : {
        type: Date
    },
    year : {
        type : Number
    }
});

const Teachers = mongoose.model("Teachers",teacherSchema);
module.exports = Teachers;