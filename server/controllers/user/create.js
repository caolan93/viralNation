const User = require("../../models/User");

const createUser = async (req, res) => {
  try {
    // Searching to see if a users email already exists
    let user = User.findOne({ email: req.body.email });

    if (user) {
      throw `The email address ${email} is already registered to another user.`;
    }

    user = new User(req.body);

    await user.save();

    return res.send({
      message: "User created successfully.",
      ok: true,
      errors: [],
      user,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Error when creating new user",
      ok: false,
      errors: [error],
      user: {},
    });
  }
};

module.exports = createUser;
