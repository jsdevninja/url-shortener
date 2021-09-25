const express = require("express");

const router = express.Router();

const urls = require("./url.routes");

router.use("/api/urls", urls);

module.exports = router;
