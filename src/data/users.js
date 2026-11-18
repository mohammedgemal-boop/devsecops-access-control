
const bcrypt = require("bcryptjs");

// Demo accounts for the DineDesk assignment.
// Passwords are hashed; plaintext passwords are never stored.

const demoPassword = "DineDeskDemo2026!";

const users = [
  { id: "u1", name: "Bole Waiter", email: "waiter.bole@dinedesk.test", role: "waiter", branchId: "bole" },
  { id: "u2", name: "Bole Cashier", email: "cashier.bole@dinedesk.test", role: "cashier", branchId: "bole" },
  { id: "u3", name: "Bole Manager", email: "manager.bole@dinedesk.test", role: "manager", branchId: "bole" },

  { id: "u4", name: "Piassa Waiter", email: "waiter.piassa@dinedesk.test", role: "waiter", branchId: "piassa" },
  { id: "u5", name: "Piassa Cashier", email: "cashier.piassa@dinedesk.test", role: "cashier", branchId: "piassa" },
  { id: "u6", name: "Piassa Manager", email: "manager.piassa@dinedesk.test", role: "manager", branchId: "piassa" },

  { id: "u7", name: "Chain Administrator", email: "admin@dinedesk.test", role: "admin", branchId: null }
].map(user => ({
  ...user,
  passwordHash: bcrypt.hashSync(demoPassword, 12)
}));

module.exports = users;
