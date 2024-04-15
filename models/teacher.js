const mongoose = require("mongoose");
const Subjects = require("./subjects.js");

const teacherSchema = new mongoose.Schema({
    teacherId: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
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
    joinDate : {
        type: Date
    },
    teachTo : {
        type:[String],
        default:[],
        required: true,
        validate: {
            validator: function(v) {
                return v.length >= 1;
            },
        }
    },
    
});

const Teacher = mongoose.model("Teacher",teacherSchema);
module.exports = Teacher;