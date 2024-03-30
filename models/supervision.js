const mongoose = require("mongoose");


// const scheduleSchema = new mongoose.Schema({
//     teacherId: {
//         type: [Number],
//         default: []
//     }
// });

// const teacherSchema = new mongoose.Schema({
//     teacherId: {
//         type: {
//             slotNo: Number,
//             date: Date,
//             time: String,
//             blockNumber: Number,
//             subject: String,
//             year: String,
//         },
//         default: {}
//     }
// });


const supervisionSchedule = new mongoose.Schema({
    title: {
        type: String
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    updatedOn: {
        type: Date,
        default: new Date()
    },
    year: {
        type: [String]
    },
    semester: {
        type: Number
    },
    paperPerDay: {
        type: Number
    },
    numberOfBlocks: {
        type: [Number],
        default: 0
    },
    timeSlots: {
        type: [Date]
    },
    schedule: {
        type: Map,
        default: null
    },
    teacherWiseSchedule: {
        type: Map,
        default: null
    },
    status:{
        type: String,
        default: "draft"
    }
});

const supervisionSchema = mongoose.model("Supervision", supervisionSchedule);

module.exports = supervisionSchema;