const app = require("./app");
const connectDB = require("./config/db");
const { SERVER_PORT } = require("./secret");

app.listen(SERVER_PORT || 4001, async () => {
  console.log("Server start port:4000");
  // database connection
  await connectDB();
});
