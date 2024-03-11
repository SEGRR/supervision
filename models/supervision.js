const mongoose = require("mongoose");


const scheduleSchema = new mongoose.Schema({
      teacherId:{
        type:[Number],
        default:[]
      }
  });


const supervisionSchedule = new mongoose.Schema({
    title: {
        type: String
    },
    createdOn:{
        type: Date,
        default: new Date()
    },
    updatedOn:{
        type :Date,
        default: new Date()
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
    schedule:{
        type: Map
    } 
});

const supervisionSchema = mongoose.model("Supervision",supervisionSchedule);

module.exports = supervisionSchema;