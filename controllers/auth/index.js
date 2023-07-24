const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logOut");
const updateAvatar = require("../users/updateAvatar");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateAvatar: ctrlWrapper(updateAvatar),
};
