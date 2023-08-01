const User = require("../models/userModel");
const data = require("../data");

const seedUser = async (req, res, next) => {
  try {
    // delete existing all users
    await User.deleteMany({});

    // insert new users
    const users = await User.insertMany(data.users);

    // response
    return res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { seedUser };
