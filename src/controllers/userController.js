const mongoose = require("mongoose");
const { successResponse } = require("../helper/responseController");
const User = require("../models/userModel");
const createError = require("http-errors");

const getUsers = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 2;

    const searchRegExp = new RegExp(".*" + search + ".*", "i");
    const filter = {
      isAdmin: { $ne: true },
      $or: [
        { name: { $regex: searchRegExp } },
        { email: { $regex: searchRegExp } },
        { phone: { $regex: searchRegExp } },
      ],
    };
    const options = { password: 0 };

    const users = await User.find(filter, options)
      .limit(limit)
      .skip((page - 1) * limit);

    const count = await User.find(filter).countDocuments();

    if (!users) throw createError(404, "no uses found!");

    return successResponse(res, {
      statusCode: 200,
      message: "Users were returned successfully",
      payload: {
        users,
        pageination: {
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          previousPage: page - 1 > 0 ? page - 1 : null,
          nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = { password: 0 };

    const user = await User.findById(id, options);

    if (!user) throw createError(404, "User dosen't exist with this id!");

    return successResponse(res, {
      statusCode: 200,
      message: "User were is returned successfully",
      payload: { user },
    });
  } catch (error) {
    if (error instanceof mongoose.Error) {
      next(createError(400, "Invalid User Id."));
      return;
    }
    next(error);
  }
};

module.exports = { getUsers, getUser };