const returnCode = require('../returnCode');
const router = require('express').Router();
const travelStop = require('../models/travelStop');
const ValidCheck = require("../validCheck");
const Util = require("../util");


router.post('/create', (req, res) => {

    // if(req.session.username !== "admin") {
    //   res.send(returnCode.notAdmin)
    //   return;
    // }

    var lat = parseFloat(req.body.lat);
    var lng = parseFloat(req.body.lng);
    var title = req.body.title;
    var description = req.body.description;
    var image = req.body.image;

    travelStop.create(title, description, lat, lng, image)
    .then(function() {
        res.send(returnCode['travelstop']['addSuccess']);
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send(returnCode['unknown']['error'])
    })

});

router.get('/:lat/:lng', (req, res) => {
    var lat = req.params.lat;
    var lng = req.params.lng;

    travelStop.selectAll({})
    .then((code) => {
        console.log(code)
        var output = []
        for(i=0;i<code.length;i++) {
            output.push(
                {
		    "idx" : code[i]['idx'], 
                    "name": code[i]['title'],
                    "location":{
                        "longitude": code[i]['lng'],
                        "latitude": code[i]['lat'],
                    },
                }
            )
        }
        res.send(output)
    })
});



module.exports = router;
