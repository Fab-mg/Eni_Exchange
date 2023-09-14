const Joi = require('joi');

const createUserValidation = Joi.object({
  type: Joi.string().valid('Administrateur', 'Etudiant', 'Professeur').required(),
  matricule: Joi.string().required(),
  niveau: Joi.string().valid('L1', 'L2', 'L3', 'M1', 'M2', 'Sortant'),
  userType: Joi.string().valid('IG', 'GB', 'SR'),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone: Joi.string().pattern(/^\d{10}$/),
  dateNais: Joi.date().required(),
  dateCreation: Joi.date(),
  profilePic: Joi.string(),
});

module.exports = {
  createUserValidation,
};
