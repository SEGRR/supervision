const Joi = require('joi');

// Define Joi schemas for each field
const schema = {
  divisionsPerYear: Joi.object().required(),
  examSlotsPerDay: Joi.string(),
  examStartDate: Joi.alternatives().try(Joi.date(), Joi.string().allow('')),
  examTimeSlots: Joi.array().items(
    Joi.object({
      startTime: Joi.string(),
      endTime: Joi.string()
    })
  ),
  examdays: Joi.string(),
  examDates: Joi.object(),
  selectedAcademicYear: Joi.string(),
  selectedClassrooms: Joi.array().items(
    Joi.object({
      name: Joi.string(),
      capacity: Joi.number()
    })
  ),
  selectedDepartment: Joi.string(),
  selectedYears: Joi.array().items(Joi.string()),
  title: Joi.string(),
  created_on: Joi.date().default(Date.now),
  updated_on: Joi.date().default(Date.now)
};

// Validate your data against the schema
const validateSeatingArrangement = (data) => {
  return Joi.object(schema).validate(data);
};

module.exports = validateSeatingArrangement