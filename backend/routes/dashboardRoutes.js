const express = require("express");

const router = express.Router();

const {
  getDashboardStats,
  getRecentShayaris,
  getCategoryStats,
} = require("../controllers/dashboardController");

router.get("/stats", getDashboardStats);
router.get("/recent", getRecentShayaris);
router.get("/category-stats", getCategoryStats);

module.exports = router;
