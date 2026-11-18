
const express = require("express");

const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/orders");
const reportRoutes = require("./routes/reports");
const adminRoutes = require("./routes/admin");
const paymentRoutes = require("./routes/payments");

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "DineDesk API running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/payments", paymentRoutes);

module.exports = app;
