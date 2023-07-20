const updateAvatar = require("../users/updateAvatar");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  updateAvatar: ctrlWrapper(updateAvatar),
};
