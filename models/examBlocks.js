const mongoose = require("mongoose");


const blockSchema = new mongoose.Schema({
   classroom:String,
   capacity:Number,
});

const Blocks = mongoose.model("Blocks",blockSchema);

module.exports = Blocks;