
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../data/users");
const config = require("../config/config");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    item => item.email === email
  );

  const validPassword = user
    ? await bcrypt.compare(password || "", user.passwordHash)
    : false;

  if (!user || !validPassword) {
    return res.status(401).json({
      error: "Invalid email or password"
    });
  }

  const token = jwt.sign(
    { sub: user.id },
    config.jwtSecret,
    {
      algorithm: "HS256",
      expiresIn: "15m",
      issuer: config.jwtIssuer,
      audience: config.jwtAudience
    }
  );

  res.json({
    message: "Login successful",
    token
  });
});

module.exports = router;
