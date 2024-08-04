const express = require("express");
const { getTurnamentList } = require("../controller/Turnaments");
const router = express.Router();
router.get("/", getTurnamentList);
module.exports = router;
