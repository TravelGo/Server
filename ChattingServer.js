var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);

app.use((req, res, next) => {
    console.log("[ " + req.method + " ] " + req.path)
    next();
})

server.listen(3000, () => console.log('listening on *:3000'));

var users = {}
var room = {}

websocket.on('connection', function(socket) {

    console.log('A client just joined on', socket.id);

    // Init
    socket.on('init', function(data) {
        socket.join(data.stop)
        console.log("Tstop : " + data.stop + " / " + data.user)

        // Broadcast in room " JOIN MESSAGE "
        websocket.to(data.stop).emit("join", "\"" + data.user + "\" 님께서 입장하셨습니다.")
    });


    // Message
    socket.on('message', function(data) {
        console.log("[ " + data.stop + " ] \"" + data.user + "\" : " + data.message)
        // Broadcast in room " MESSAGE "
        websocket.to(data.stop).emit("message", {
            "sender" : data.user,
            "message" : data.message
        })
    });
    
});

