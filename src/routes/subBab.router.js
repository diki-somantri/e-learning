const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
const { listSubBab } = require("../controllers/subBab.controller");

router.get("/:id_bab?", verifyToken, listSubBab);

module.exports = router;
