const express = require("express");
const router = express.Router();

const routes = require("./controllers/BasicController.js");

router.get("/", routes.home);
router.get("/second", routes.second);

module.exports = router;