const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required,
  },
  last_name: {
    type: String,
    required,
  },
  email: {
    type: String,
    required,
  },
  image: {
    type: String,
    required,
  },
  is_verified: {
    type: Boolean,
    required,
  },
});

module.exports = mongoose.model("User", UserSchema);