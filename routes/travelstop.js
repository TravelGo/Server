const returnCode = require('../returnCode');
const router = require('express').Router();
const travelStop = require('../models/travelStop');
const ValidCheck = require("../validCheck");
const Util = require("../util");


router.post('/create', (req, res) => {

    if(req.session.username !== "admin") {
      res.send(returnCode.notAdmin)
      return;
    }

    var lat = float(req.body.lat.trim());
    var lng = float(req.body.lng.trim());
    var title = req.body.title.trim();
    var description = req.body.description.trim();
    var image = req.body.image.trim();

    Accounts.create(title, description, lat, lng, image)
    .then(function() {
        res.send(returnCode['travelstop']['addSuccess']);
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send(returnCode['unknown']['error'])
    })

});



module.exports = router;
