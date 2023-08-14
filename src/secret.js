const dotenv = require("dotenv");

dotenv.config();

// variable
const SERVER_PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const DEFAULT_USER_IMAGE = process.env.DEFAULT_USER_IMAGE;
const jwtActivationKey =
  process.env.JWT_ACTIVATION_KEY || "PH7UXth9hHuuEwY6AypYzNlVZXgIXsIA";

module.exports = {
  SERVER_PORT,
  MONGODB_URL,
  DEFAULT_USER_IMAGE,
  jwtActivationKey,
};
