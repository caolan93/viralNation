const User = require("../../models/User");

const getAllUsers = async (req, res) => {
  try {
    let users = await User.find({});

    return res.send({
      message: "Users found successfully.",
      ok: true,
      errors: [],
      users,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Error when finding users",
      ok: false,
      errors: [error],
      users: [],
    });
  }
};

module.exports = getAllUsers;
