const User = require("../../models/User");

const createUser = async (req, res) => {
  try {
    // Searching to see if a users email already exists
    let user = await User.findByIdAndDelete(req.params.id);

    return res.send({
      message: "User deleted successfully.",
      ok: true,
      errors: [],
    });
  } catch (error) {
    return res.status(400).send({
      message: "Error when deleting user",
      ok: false,
      errors: [error],
    });
  }
};

module.exports = createUser;
