const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  getDashboardStats,
  getRecentShayaris,
  getCategoryStats,
} = require("../controllers/dashboardController");

router.get("/stats", authMiddleware, getDashboardStats);
router.get("/recent", authMiddleware, getRecentShayaris);
router.get("/category-stats", authMiddleware, getCategoryStats);

module.exports = router;
