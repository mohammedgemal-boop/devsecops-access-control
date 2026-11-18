require("dotenv").config();

const config = require("./config/config");
const app = require("./app");

app.listen(config.port, () => {
  console.log(`DineDesk API running on port ${config.port}`);
});