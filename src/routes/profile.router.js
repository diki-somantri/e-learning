const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/auth");
const { profile } = require("../controllers/profile.controller");

router.get("/", verifyToken, profile);

module.exports = router;
