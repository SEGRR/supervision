const mongoose = require("mongoose");


// const subjectSchema = new mongoose.Schema({
//     code: String,
//     name: {
//         type: String
//     },
//     department:{
//         type: String
//     },
//     semester:{
//         type: Number
//     },
//     year:{
//         type :String
//     },
//     elective: {
//         type: Boolean,
//         default: false
//     },
//     electiveList: {
//        tye: [{
//          code: String,
//          name: String
//        }],
//        default: []
//     }
// });

const subjectSchema = new mongoose.Schema({
    branch:String,
    semester:Number,
    year:String,
    subjects:{
        type:[
            {
                code:String,
                name:String,
                abr:String,
            }
        ],
        required:true
    }
});

const Subjects = mongoose.model("Subjcts",subjectSchema);

module.exports = Subjects;