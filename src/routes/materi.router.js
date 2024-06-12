const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
const { listMateri } = require("../controllers/materi.controller");

router.get("/:id_sub_bab?", verifyToken, listMateri);

module.exports = router;
