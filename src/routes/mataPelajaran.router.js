const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
const {
  listMataPelajaran,
} = require("../controllers/mataPelajaran.controller");

router.get("/:id_mode_pembelajaran?", verifyToken, listMataPelajaran);

module.exports = router;
