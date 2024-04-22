const mongoose = require("mongoose");


const divisionSchema = new mongoose.Schema({
  className:{
    type:String,
    unique:true
  },
  startRollNo:Number,
  endRollNo:Number,
  total:Number,
  department:String
});

const Divisions = mongoose.model("divisions",divisionSchema);

module.exports = Divisions;

