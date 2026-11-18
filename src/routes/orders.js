
const express = require("express");
const orders = require("../data/orders");
const authenticate = require("../middleware/auth");
const { requirePermission } = require("../middleware/permissions");
const { canAccessOrder } = require("../middleware/branchAccess");

const router = express.Router();

router.use(authenticate);

// GET all orders belonging to the user's branch
router.get("/", (req, res) => {
  const visibleOrders = req.user.role === "admin"
    ? orders
    : orders.filter(order => order.branchId === req.user.branchId);

  res.json(visibleOrders);
});

// GET one order with branch authorization
router.get("/:id", requirePermission("orders:read"), (req, res) => {
  const order = orders.find(item => item.id === req.params.id);

  if (!order || !canAccessOrder(req.user, order)) {
    return res.status(404).json({ error: "Order not found" });
  }

  res.json(order);
});

// Create order using the authenticated user's branch
router.post("/", requirePermission("orders:create"), (req, res) => {
  const { table, item, total } = req.body;

  if (
    !Number.isInteger(table) || table < 1 ||
    typeof item !== "string" || !item.trim() ||
    typeof total !== "number" || !Number.isFinite(total) || total < 0
  ) {
    return res.status(400).json({ error: "Invalid order data" });
  }

  const order = {
    id: `o${Date.now()}`,
    branchId: req.user.branchId,
    table,
    item: item.trim(),
    status: "pending",
    total
  };

  orders.push(order);

  res.status(201).json(order);
});

module.exports = router;
