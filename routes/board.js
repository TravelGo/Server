const returnCode = require('../returnCode');
const router = require('express').Router();
const board = require('../models/board');
const ValidCheck = require("../validCheck");
const Util = require("../util");

// id = T스탑 번호

// T스탑에 글 쓰기
router.post('/:id/write', (req, res) => {
  var username = req.body.username;
  var lat = parseFloat(req.body.lat);
  var lng = parseFloat(req.body.lng);
  var content = req.body.content;
  var image = req.body.image;

  board.create(username, lat, lng, content, image)
    .then(function() {
        res.send(returnCode['board']['addSuccess']);
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send(returnCode['unknown']['error'])
    })
});

//T스탑 글 수정
router.post('/:id/edit', (req, res) => {

});

//T스탑 글 삭제
router.post('/:id/delete', (req, res) => {

});

// T스탑 글 목록
router.get('/:id/list', (req, res) => {
  board.selectAll({})
    .then((result) => {
      console.log(result);
      var list = [];
      for (i = 0; i < result.length; i++) {
        list.push(
          {
            "name": result[i]['username'],
            "content": result[i]['content'],
            "location":{
                "longitude": code[i]['lng'],
                "latitude": code[i]['lat'],
            }
          }
        );
      }
      res.send(list);
    });
});

module.exports = router;
