const router = require('express').Router();
const Comments = require('../models/comments');
const ValidCheck = require("../validCheck");
const Util = require("../util");

//48분
router.put('/:id', (req, res) => {
    Comments.create({
        travelStop : req.params.id,
        user : req.body.user,
        body : req.body.body,
        date : Date.now()
    }).then(r => {
        res.send({
            status : true
        })
    }).catch(() => {
        res.send({
            status : false
        })
    })
})

router.get('/:id', (req, res) => {
    Comments.find({
        travelStop : req.params.id,
    })
    .sort({date:-1})
    .then(r => {
        res.send({
            status : true,
            data : r
        })
    }).catch(() => {
        res.send({
            status : false
        })
    })
})

module.exports = router;
