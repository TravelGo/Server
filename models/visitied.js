const mongoose = require('mongoose');

const Visited = new mongoose.Schema({
    user : {
        type: String,
        required: true,
    },
    travelstop : {
        type: String,
        required: true,
    },
    date : {
        type : Number,
        required : true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('visitied', Visited);
