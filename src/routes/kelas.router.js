const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
const { listKelas } = require("../controllers/kelas.controller");

router.get("/", verifyToken, listKelas);

module.exports = router;
