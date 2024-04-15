const Joi = require("joi");

const teacherSchema = Joi.object({
    teacherId: Joi.number().required,
    name: Joi.string().required(),
    designation: Joi.string(),
    joining_date: Joi.date(),
    teachTo: Joi.array().min(1).items(Joi.string())  
});

module.exports = teacherSchema;