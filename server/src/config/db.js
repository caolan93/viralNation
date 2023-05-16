const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(`There was a problem connecting to MongoDB`);
  }
};

module.exports = connectDB;
