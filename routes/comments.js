const router = require('express').Router();
const Comments = require('../models/comments');
const Accounts = require('../models/accounts');
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

router.get('/:id', async (req, res) => {
    const rows = await Comments.find({ travelStop : req.params.id, }).sort({date:-1}).exec();
    const output = []
    for(let i=0;i<rows.length;i++) {
        const account = await Accounts.findById(rows[i].user).exec()
        output.push({
            'userID' : rows[i].user,
            'user' : account.fullname,
            'body' : rows[i].body,
            'date' : rows[i].date,
        })
    }
    res.send({
        status : true,
        data : output
    })
})

module.exports = router;
