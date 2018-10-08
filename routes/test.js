const returnCode = require('../returnCode');
const router = require('express').Router();
const Accounts = require('../models/accounts');
const ValidCheck = require("../validCheck");
const Util = require("../util");

router.get('/', (req, res) => {
  res.send("SAD");
});


module.exports = router;
