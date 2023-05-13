const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongo DB is connected successfull`);
  } catch (error) {
    console.log(`There was a problem connecting to MongoDB`);
  }
};

module.exports = connectDB;
