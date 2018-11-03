const returnCode = require('../returnCode');
const router = require('express').Router();
const board = require('../models/board');
const ValidCheck = require("../validCheck");
const Util = require("../util");

// no = T스탑 번호

// T스탑에 방명록 쓰기
router.post('/:idx/write', (req, res) => {
  var travelStopIdx = req.params.idx;
  var username = req.body.username;
  var lat = parseFloat(req.body.lat);
  var lng = parseFloat(req.body.lng);
  var memo = req.body.memo;
  var image = req.body.image;

  board.create(username, lat, lng, article)
    .then(function() {
        res.send(returnCode['board']['addSuccess']);
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send(returnCode['unknown']['error'])
    })
});

//작성한 방명록 수정
router.post('/:idx/edit', (req, res) => {
  var travelStopIdx = req.params.idx;
  board.edit({travelStopIdx: travelStopIdx})
    .then(function() {
      res.send(returnCode['board']['addSuccess'])
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send(returnCode['unknown']['error'])
    })
});

//T스탑 글 삭제
router.post('/:idx/delete', (req, res) => {
  var travelStopIdx = req.params.idx;
  board.delete({travelStopIdx: travelStopIdx})
    .then(function() {
      res.send(returnCode['board']['addSuccess'])
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send(returnCode['unknown']['error'])
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
                "longitude": code[i]['lng'],
                "latitude": code[i]['lat']
            }
          }
        );
      }
      res.send(list);
    });
});

module.exports = router;
