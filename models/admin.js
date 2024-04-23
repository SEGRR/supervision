const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const adminSchema = new mongoose.Schema({
    email: String
});

adminSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Admin",adminSchema);

