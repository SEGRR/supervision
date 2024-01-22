const mongoose = require("mongoose");


const subjectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    dept:{
        type: String
    },
    year:{
        type :Number
    }
});

const Subjects = mongoose.model("Subjcts",subjectSchema);

module.exports = Subjects;