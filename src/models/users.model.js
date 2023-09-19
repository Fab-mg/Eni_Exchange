const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // _id is automatically created by MongoDB
  type: {
    type: String,
    enum: ['Administrateur', 'Etudiant', 'Professeur'],
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: false,
  },
  matricule: {
    type: String,
    required: true,
  },
  niveau: {
    type: String,
    enum: [null, 'L1', 'L2', 'L3', 'M1', 'M2', 'Sortant'],
  },
  userType: {
    type: String,
    enum: [null, 'IG', 'GB', 'SR'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: { type: String, required: true },
  phone: {
    type: Number,
  },
  dateNais: {
    type: Date,
    required: true,
  },
  dateCreation: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: false,
  },
  signaled: {
    type: Boolean,
    default: false,
  },
  profilePic: String, // link or ID here
  dateSuppr: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
