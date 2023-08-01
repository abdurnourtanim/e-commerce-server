const dotenv = require("dotenv");

dotenv.config();

// variable
const SERVER_PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const DEFAULT_USER_IMAGE = process.env.DEFAULT_USER_IMAGE;

module.exports = { SERVER_PORT, MONGODB_URL, DEFAULT_USER_IMAGE };
