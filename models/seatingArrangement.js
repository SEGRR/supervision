const mongoose = require("mongoose");


const seatingArrangementSchema = new mongoose.Schema({
   divisionsPerYear:{
      type:Map,
      required:true
   },
   examSlotsPerDay:Number,
   examStartDate:Date,
   examTimeSlots:[
      { startTime: String, endTime: String }
   ],
   examdays:Number,
   selectedAcademicYear:String,
   selectedClassrooms:[
      { name:String, capacity: Number }
   ],
   selectedDepartment:String,
   selectedYears:[String],
   title:String,
   created_on:{
      type:Date,
      default:Date.now()
   },
   updated_on:{
      type:Date,
      default:Date.now()
   }
});

const seatingArrangement = mongoose.model("seatingArrangement",seatingArrangementSchema);

module.exports = seatingArrangement;

