const returnCode = require('../returnCode');
const router = require('express').Router();
const board = require('../models/board');
const ValidCheck = require("../validCheck");
const Util = require("../util");

// no = T스탑 번호

// T스탑에 방명록 쓰기
router.post('/:idx/write', (req, res) => {
  var travelStopIdx = req.params.idx;
  var writer = req.body.writer;
  var lat = parseFloat(req.body.lat);
  var lng = parseFloat(req.body.lng);
  var memo = req.body.memo;

  board.create(travelStopIdx, writer, lat, lng, memo)
    .then(function() {
        res.send(returnCode['board']['writeSuccess']);
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send(returnCode['board']['writeFail'])
    })
});

//작성한 방명록 수정
router.post('/:idx/:memo_id/edit', (req, res) => {
  board.edit({_id: req.params.memo_id}, {$set: req.body})
    .then(function() {
      res.send(returnCode['board']['writeSuccess']);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send(returnCode['board']['writeFail']);
    })
});

//T스탑 글 삭제
router.post('/:idx/:memo_id/delete', (req, res) => {
  board.delete({_id: req.params.memo_id})
    .then(function() {
      res.send('Deleted Successfully.');
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send(returnCode['unknown']['error']);
    })
});

// T스탑 글 목록
router.get('/:idx/list', (req, res) => {
  board.selectAll({})
    .then((result) => {
      console.log(result);
      var list = [];
      for (i = 0; i < result.length; i++) {
        list.push(
          {
            "name": result[i]['username'],
            "memo": result[i]['memo'],
            "location":{
                "latitude": result[i]['lat'],
                "longitude": result[i]['lng']
            }
          }
        );
      }
      res.send(list);
    });
});

module.exports = router;
