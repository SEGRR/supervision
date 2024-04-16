const Joi = require("joi");

const supervisionSchema = Joi.object({
    title: Joi.string().required(),
    // department: Joi.string(),
    // semester: Joi.number(),
    selectedYears: Joi.array().min(1).items(Joi.string().required()).required(),
    paperSlotsPerDay: Joi.number().integer().min(1).max(2).required(),
    noOfBlocksPerYear: Joi.object().pattern(Joi.string().required(), Joi.number().min(1).required().integer()).required(),
    paperTimeSlots: Joi.array().required(),
    subjectsPerYear: Joi.object().pattern(
        Joi.string().valid('FE', 'SE', 'TE', 'BE'), // Key validation
        Joi.number().min(1) // Value validation
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

module.exports = supervisionSchema;
