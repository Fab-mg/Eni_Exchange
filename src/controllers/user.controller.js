const userService = require('../services/user.service');
const bcrypt = require('bcryptjs');
const { createUserValidation } = require('../validation/user.validation');

const createNewUser = async (req, res) => {
  try {
    console.log('body', req.body);
    //body validation
    if (!req.body) {
      return res.status(400).send({ message: 'Empty body' });
    }
    const { error, value } = createUserValidation.validate(req.body);
    console.log('value', value);
    if (error) {
      return res.status(400).send({ message: 'Invalid body', error });
    }
    const password = bcrypt.hashSync(value.password, 10);
    const userInfo = {
      type: value.type,
      matricule: value.matricule,
      niveau: value.niveau || null,
      userType: value.userType || null,
      email: value.email,
      password: password,
      phone: value.phone || null,
      dateNais: value.dateNais || null,
      profilePic: value.profilePic,
    };

    //Saving the user here
    const user = await userService.createUser(userInfo);
    if (!user) {
      return res.status(500).send({ message: 'Error creating user', error });
    }
    return res.status(200).send({ message: 'Success', user });
  } catch (error) {
    return res.status(500).send({ message: 'True server error', error });
  }
};

module.exports = {
  createNewUser,
};
