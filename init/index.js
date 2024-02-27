const mongoose = require("mongoose");
const initData = require("./data.js");
const Teacher = require("../models/teacher.js");
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/supervision");
}

main().then(()=>{
    console.log("successful connection with db");
}).catch((err)=>{
    console.log(err);
});


async function initDB(initData) {
    await Teacher.deleteMany({});
    await Teacher.insertMany(initData);
    console.log("data is inserted.");
}

initDB(initData);