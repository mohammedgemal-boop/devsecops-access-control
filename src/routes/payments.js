
const express = require("express");
const authenticate = require("../middleware/auth");
const { requirePermission } = require("../middleware/permissions");
const orders = require("../data/orders");

const router = express.Router();
const payments = [];

router.use(authenticate);

router.post("/", requirePermission("payments:create"), (req, res) => {
  const { orderId, amount } = req.body;

  const order = orders.find(item => item.id === orderId);

  if (!order || order.branchId !== req.user.branchId) {
    return res.status(404).json({ error: "Order not found" });
  }

  if (
    typeof amount !== "number" ||
    !Number.isFinite(amount) ||
    amount <= 0 ||
    amount !== order.total ||
    order.status === "paid"
  ) {
    return res.status(400).json({ error: "Invalid payment" });
  }

  const payment = {
    id: `p${payments.length + 1}`,
    orderId,
    amount,
    branchId: req.user.branchId,
    status: "completed"
  };

  payments.push(payment);
  order.status = "paid";

  res.status(201).json(payment);
});

module.exports = router;
