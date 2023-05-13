const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  is_verified: {
    type: Boolean,
  },
});

module.exports = mongoose.model("User", UserSchema);
