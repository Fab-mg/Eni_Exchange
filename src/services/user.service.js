const User = require('../models/users.model');

const createUser = async (userInfo) => {
  try {
    const user = await User.create(userInfo);
    if (!user) {
      return null;
    } else {
      return user;
    }
  } catch (error) {
    console.log('Server failed to save user', error);
    return null;
  }
};

module.exports = {
  createUser,
};
