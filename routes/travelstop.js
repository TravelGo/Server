const returnCode = require('../returnCode');
const router = require('express').Router();
const travelStop = require('../models/travelStop');
const visitied = require('../models/visitied');
const ValidCheck = require("../validCheck");
const Util = require("../util");


router.get('/recommanded', (req, res) => {
    travelStop.selectAll({})
    .then((code) => {
        console.log(code)
        var output = []
        for(i=0;i<code.length;i++) {
            output.push(
                {
                    "_id": code[i]['_id'],
                    "name": code[i]['title'],
                    "image": code[i]['image'],
                }
            )
        }
        res.send(output)
    })
});


router.get('/:id', (req, res) => {
	var id = req.params.id;
	travelStop.findById(id).then(stop => {
        res.send(stop)
    })
});



router.get('/visited/:userID', async (req, res) => {
    var userID = req.params.userID;
    var rows = await visitied.find({ user : userID }).sort({date:-1}).exec()
    var outputs = [];
    for(let i=0;i<rows.length;i++) {
        var r = await travelStop.findById(rows[i]['travelstop']).exec()
        console.log(r);
        outputs.push(r)
    }
    res.send(outputs);
});


router.get('/visit/:userID/:id', (req, res) => {
    var userID = req.params.userID;
    var id = req.params.id;

    var userID = req.params.userID;
    visitied.findOne({
        user : userID,
        travelstop : id
    }).sort({date:-1}).then((r) => {
        if(!r) {
            visitied.create({
                user : userID,
                travelstop : id,
                date : Date.now()
            })
            res.send({
                status : true,
                message : "방문을 환영합니다."
            })
            return;  
        }
        if(r.date > Date.now() - 3600 * 24 * 1000) {
            res.send({
                status : false,
                message : "24시간에 한번씩만 누를 수 있습니다."
            })
            return;
        }
        visitied.create({
            user : userID,
            travelstop : travelstop,
            date : Date.now()
        })
        res.send({
            status : true,
            message : "방문을 환영합니다."
        })
    })
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
