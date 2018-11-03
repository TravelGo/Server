const returnCode = require('../returnCode');
const router = require('express').Router();
const Accounts = require('../models/accounts');
const ValidCheck = require("../validCheck");
const Util = require("../util");

router.get('/', (req, res) => {
  res.send("<h1>HiHi~ TravelGO API asdsadsad</h1>")
});

module.exports = router;
