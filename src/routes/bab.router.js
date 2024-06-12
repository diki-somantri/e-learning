const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
const { listBab } = require("../controllers/bab.controller");

router.get("/:id_mata_pelajaran?", verifyToken, listBab);

module.exports = router;
