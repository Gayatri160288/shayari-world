const express = require("express");

const router = express.Router();

const {
  getShayaris,
  getShayariById,
  createShayari,
  updateShayari,
  deleteShayari,
} = require("../controllers/shayariController");

router.get("/", getShayaris);

router.get("/:id", getShayariById);

router.post("/", createShayari);

router.put("/:id", updateShayari);

router.delete("/:id", deleteShayari);

module.exports = router;
