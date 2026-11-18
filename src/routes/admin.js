
const express = require("express");
const users = require("../data/users");
const authenticate = require("../middleware/auth");
const { requireRole } = require("../middleware/permissions");

const router = express.Router();

router.use(authenticate);

router.get("/users", requireRole("admin"), (req, res) => {
  const safeUsers = users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    branchId: user.branchId
  }));

  res.json(safeUsers);
});

module.exports = router;
