const mongoose = require("mongoose");
const { MONGODB_URL } = require("../secret");

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(MONGODB_URL, options);
    console.log("Database connection successfull!");
    mongoose.connection.on("error", (error) => {
      console.error("DB connection error: ", error);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
