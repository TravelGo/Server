const returnCode = require('../returnCode');
const router = require('express').Router();
const travelStop = require('../models/travelStop');
const ValidCheck = require("../validCheck");
const Util = require("../util");


router.post('/upload', (req, res) => {

    // if(req.session.username !== "admin") {
    //   res.send(returnCode.notAdmin)
    //   return;
    // }

    var lat = parseFloat(req.body.lat);
    var lon = parseFloat(req.body.lon);
    var name = req.body.name;
    var description = req.body.description;
    var image = req.body.image;

    travelStop.create(lat, lon, name, description, image)
    .then(function() {
        res.send(returnCode['travelstop']['addSuccess']);
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send(returnCode['travelstop']['addFail'])
    });

});

router.get('/list', (req, res) => {
    travelStop.selectAll({})
    .then(result => {
        console.log(result)
        var list = [];
        for(i = 0; i < code.length; i++) {
            list.push(
                {
                    "name": result[i]['name'],
                    "location":{
                        "latitude": result[i]['lat'],
                        "longitude": result[i]['lon'],
                    },
                    "image": result[i]['image'],
                    "description": result[i]['description'],

                }
            )
        }
        res.json(list);
    })
    .catch(err => res.status(500).send(err));
});

router.get('/:key', (req, res) => {
  var key = req.params.key;
  travelstop.findOne({_id: key})
  .then((code) => {
    res.json(code);
  })
  .catch(err => res.status(500).send(err));
});



module.exports = router;
