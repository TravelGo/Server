const returnCode = require('../returnCode');
const router = require('express').Router();
const travelStop = require('../models/board');
const ValidCheck = require("../validCheck");
const Util = require("../util");

// no = T스탑 번호

// T스탑에 글 쓰기
router.post('/:no', (req, res) => {

});

// T스탑 글 목록
router.get('/:no', (req, res) => {

});

module.exports = router;
