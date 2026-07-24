const express = require("express");
const cors = require("cors");
const categoryRoutes = require("./routes/categoryRoutes");
const shayariRoutes = require("./routes/shayariRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/dashboard", dashboardRoutes);
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/shayaris", shayariRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Shayari World API 🚀",
  });
});

module.exports = app;
