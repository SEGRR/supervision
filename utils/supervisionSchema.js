const Joi = require("joi");

const supervisionSchema = Joi.object({
    title: Joi.string().required(),
    department: Joi.string(),
    semester: Joi.number().allow(1,2),
    selectedYears: Joi.array().min(1).items(Joi.string().required()).required(),
    paperSlotsPerDay: Joi.number().integer().min(1).max(2).required(),
    noOfBlocksPerYear: Joi.object().pattern(Joi.string().required(), Joi.array()).required(),
    paperTimeSlots: Joi.array().items(
        Joi.object({
          startTime: Joi.string().required(),
          endTime: Joi.string().required()
        })
      ).required(),
    subjectsPerYear: Joi.object().pattern(
        Joi.string().valid('FE', 'SE', 'TE', 'BE'), // Key validation
        Joi.array() // Value validation
      ).required(),
    yearSchedule: Joi.array().items(Joi.object({
        totalSlots: Joi.number().integer().required(),
        schedule: Joi.object().pattern(Joi.string().required(), Joi.array().items(Joi.boolean()).required()).required(),
        headers: Joi.object({
            days: Joi.array().items(Joi.string()).required(),
            subjects: Joi.array().items(Joi.string()).required(),
            blocks: Joi.array().items(Joi.string()).required()
        }).required()
    })).required(),
    createdOn: Joi.date().default(new Date()),
    updatedOn: Joi.date().default(new Date())
});

const scheduleNewSchema = Joi.object({
    title: Joi.string().required(),
    department: Joi.string(),
    semester: Joi.number().allow(1,2),
    subjectsPerYear: Joi.object().pattern(
        Joi.string().valid('FE', 'SE', 'TE', 'BE'), // Key validation
        Joi.array().items(Joi.string()) // Value validation
      ).required(),
      noOfBlocksPerYear: Joi.object().pattern(Joi.string().required(), Joi.array().items(Joi.string())).required(),
      selectedYears: Joi.array().min(1).items(Joi.string().required()).required(),
      paperSlotsPerDay: Joi.number().integer().min(1).max(2).required(),
    paperTimeSlots: Joi.array().items(
      Joi.object({
        startTime: Joi.string().required(),
        endTime: Joi.string().required()
      })
    ).required(),
    teacherList: Joi.array().items(Joi.string()).optional()
  });


function supervisionSchemaValidator(data){
    return supervisionSchema.validate(data);
}

function newSupervisionSchemaValidator(data){
    return scheduleNewSchema.validate(data);
}


module.exports = {supervisionSchemaValidator, newSupervisionSchemaValidator};
