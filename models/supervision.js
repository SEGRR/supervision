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
    selectedYears: {
        type: [String]
    },
    paperSlotsPerDay: {
        type: Number
    },
    noOfBlocksPerYear: {
        type: Map, 
    },
    timeSlots: {
        type: [Date]
    },
    yearSchedule: {
        type: [{
            totalSlots:Number,
            schedule: Map,
            headers:{
                days:[String],
                subjects:[String],
                blocks:[String]
            }
        }],
        default: []
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    updatedOn: {
        type: Date,
        default: new Date()
    },
});

const supervisionSchema = mongoose.model("Supervision", supervisionSchedule);

module.exports = supervisionSchema;