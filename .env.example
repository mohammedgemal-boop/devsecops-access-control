
require("dotenv").config();

function loadConfig() {
  const required = [
    "JWT_SECRET",
    "JWT_ISSUER",
    "JWT_AUDIENCE"
  ];

  for (const name of required) {
    if (!process.env[name]) {
      throw new Error(`Missing required setting: ${name}`);
    }
  }

  if (process.env.JWT_SECRET.length < 32) {
    throw new Error("JWT_SECRET must be at least 32 characters");
  }

  return {
    port: Number(process.env.PORT) || 4000,
    jwtSecret: process.env.JWT_SECRET,
    jwtIssuer: process.env.JWT_ISSUER,
    jwtAudience: process.env.JWT_AUDIENCE
  };
}

module.exports = loadConfig();
