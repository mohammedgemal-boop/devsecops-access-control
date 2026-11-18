
const express = require("express");
const orders = require("../data/orders");
const authenticate = require("../middleware/auth");
const { requirePermission } = require("../middleware/permissions");

const router = express.Router();

router.use(authenticate);

router.get("/branch", requirePermission("reports:read"), (req, res) => {
  const branchOrders = req.user.role === "admin"
    ? orders
    : orders.filter(order => order.branchId === req.user.branchId);

  const totalSales = branchOrders
    .filter(order => order.status === "paid")
    .reduce((sum, order) => sum + order.total, 0);

  res.json({
    branchId: req.user.branchId,
    totalOrders: branchOrders.length,
    totalSales,
    orders: branchOrders
  });
});

module.exports = router;
