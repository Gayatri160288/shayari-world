const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  getShayaris,
  getShayariById,
  createShayari,
  updateShayari,
  deleteShayari,
} = require("../controllers/shayariController");

router.get("/", getShayaris);

router.get("/:id", authMiddleware, getShayariById);

router.post("/", authMiddleware, createShayari);

router.put("/:id", authMiddleware, updateShayari);

router.delete("/:id", authMiddleware, deleteShayari);

module.exports = router;
