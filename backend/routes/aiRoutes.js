const express = require("express");

const router = express.Router();

const { generateShayari } = require("../controllers/aiController");

router.post("/generate", generateShayari);

module.exports = router;
