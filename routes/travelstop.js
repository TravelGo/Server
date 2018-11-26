const returnCode = require('../returnCode');
const router = require('express').Router();
const travelStop = require('../models/travelStop');
const visitied = require('../models/visitied');
const ValidCheck = require("../validCheck");
const Util = require("../util");

router.get('/:id', (req, res) => {
	var id = req.params.id;
	travelStop.findById(id).then(stop => {
        res.send(stop)
    })
});

router.get('/visit/:id', (req, res) => {
    var id = req.params.id;
    console.log(req.session.username);
    res.send("JTJ")
});


router.post('/upload', (req, res) => {

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
		    "_id" : code[i]['_id'], 
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
