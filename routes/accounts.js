const returnCode = require('../returnCode');
const router = require('express').Router();
const Accounts = require('../models/accounts');
const ValidCheck = require("../validCheck");
const Util = require("../util");

router.get('/', (req, res) => {
    let token = "OAISJDOAJDOISAJDOIJDSAOIASDOIJASOIDj"
    res.send({
        isLogin : false,
        token : token
    })
})

router.post('/create', (req, res) => {

    var username = req.body.username.trim();
    var password = req.body.password.trim();
    var fullname = req.body.fullname.trim();
    var phone    = req.body.phone.trim();

    if(!username, !password, !fullname, !phone) {
        res.send(returnCode['invalid']['value'])
        return;
    }
    
    if(!ValidCheck("username", username)) {
        res.send(returnCode['invalid']['username'])
        return;
    }

    if(!ValidCheck("phone", phone)) {
        res.send(returnCode['invalid']['phone'])
        return;
    }

    password = Util.passwordHash(password)

    Accounts.select({username: username})
    .then(account => {

        if(account) {
            res.send(returnCode['accounts']['alreadyUsername'])
            return;
        }

        Accounts.create(username, password, fullname, phone)
        .then(function() {
            res.send(returnCode['accounts']['createSuccess']);
        })
        .catch(function(err) {
            console.log(err);
            res.status(500).send(returnCode['unknown']['error'])
        })

    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send(returnCode['unknown']['error']);
        return;
    })
});

router.post('/login', function(req, res) {
    var username = req.body.username.trim()
    var password = req.body.password.trim()
    password = Util.passwordHash(password)
    Accounts.select({
        username: username,
        password: password
    }).then(function(account) {
        if(account === null) {
            res.send({
                "status" : false,
                "message" : returnCode['accounts']['loginFail']
            })
            return;
        }
        req.session.username = username;
        res.send({
            "status" : true,
            "message" : username,
            "_id" : account._id
        })
        console.log(req.session.username)
    }).catch(function(err) {
        console.log(err);
        res.status(500).send(returnCode['unknown']['error']);
    })
});

router.get("/logout", function(req, res) {
    req.session.destroy();
    res.send(returnCode['accounts']['Logout'])
});

router.get("/:idx", function(req, res) {
    Accounts.findById(req.params.idx).then(r => {
        res.send({
            "username" : r.username,
            "fullname" : r.fullname
        });
    })
});

module.exports = router;
