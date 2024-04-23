const mongoose = require("mongoose");

const supervisionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    department:{
        type:String,
        default:""
    },
    semester:{
        type:Number,
        default:null
    },
    selectedYears: {
        type: [String],
        required: true,
        validate: {
            validator: function(v) {
                return v.length >= 1;
            },
            message: props => `${props.value} does not meet the minimum length of 1 for selectedYears array!`
        }
    },
    subjectsPerYear:{
        type: Map, 
    },
    paperSlotsPerDay: {
        type: Number,
        min: 1,
        max: 2,
        required: true
    },
    noOfBlocksPerYear: {
        type: Map, 
        required: true,
    },
    paperTimeSlots: {
        type: [{
            startTime:String,
            endTime:String
        }]
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
        default: [],
        required: true
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

const Supervision = mongoose.model("Supervision", supervisionSchema);

module.exports = Supervision;