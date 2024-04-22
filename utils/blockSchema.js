const Joi = require("joi");

const blockSchema = Joi.object({
    name : Joi.string().required(),
    capacity: Joi.number().min(1).required()
})


module.exports = blockSchema