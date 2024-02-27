const mongoose = require("mongoose");


const supervision = new mongoose.Schema({
    title: {
        type: String
    },
    createdOn:{
        type: Date
    },
    updatedOn:{
        type :Date,
    },
    year:{
        type:[String]
    },
    semester:{
        type:Number
    },
    paperPerDay:{
        type:Number
    },
    timeSlots:{
        type:[Date]
    }, 
});

const Subjects = mongoose.model("Subjcts",subjectSchema);

module.exports = Subjects;