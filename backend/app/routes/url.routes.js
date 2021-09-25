const router = require("express").Router();
const urls = require("../controllers/url.controller.js");

router.post("/", urls.create);
router.get("/:shortUrl", urls.getShortenUrl);

module.exports = router;
