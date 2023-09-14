// test if id is objectID, return true or false
const isValidObjectId = (str) => {
  const validHexCharacters = /^[0-9a-fA-F]{24}$/;
  return validHexCharacters.test(str);
};

module.exports = { isValidObjectId };
