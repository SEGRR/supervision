const mongoose = require("mongoose");


const blockSchema = new mongoose.Schema({
   name:{
      type:String,
      unique:true
   },
   capacity:Number,
});

const Blocks = mongoose.model("Blocks",blockSchema);

module.exports = Blocks;