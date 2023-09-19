// const AdminUser = require('../models/admin.user.model');
// const userValidation = require('../validation/user.validation');
const bcrypt = require('bcryptjs');
const userService = require('../services/user.service');
const authService = require('../services/auth.service');

const login = async (req, res) => {
  const user = await userService.getUserByEmail(req.body.email);
  if (!user) {
    return res.status(400).json({ message: 'User account not found. Please register first' });
  }
  bcrypt.compare(req.body.password, user.password, async (err, isMatch) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: 'Invalid credential' });
    }
    if (isMatch) {
      if (!user.active) {
        return res.status(401).json({ message: 'User account not activated, contact admin to activate account' });
      }
      const payload = {
        id: user._id,
        email: user.email,
        matricule: user.matricule,
        nom: user.nom,
        prenom: user.prenom,
      };
      return res.status(200).json({
        access_token: await authService.generateToken(payload),
        payload,
      });
    }
    return res.status(400).json({ message: 'Invalid credential' });
  });
};

// const register = async (req, res) => {
//   const user = {
//     nom: req.body.nom,
//     prenom: req.body.prenom,
//     email: req.body.email,
//     password: req.body.password,
//   };
//   const validUser = userValidation.registerValidation(user);
//   if (!validUser) {
//     return res.status(400).json({ message: 'invalid user body' });
//   }
//   const password = await bcrypt.hashSync(user.password, 10);
//   const savedUser = await AdminUser.create({ ...user, password });
//   if (!savedUser) {
//     return res.status(500).json({ message: 'failed to save user' });
//   }
//   savedUser.password = 0;
//   return res.status(201).json(savedUser);
// };

module.exports = {
  //   register,
  login,
};
