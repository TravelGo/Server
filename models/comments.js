const mongoose = require('mongoose');

const Comments = new mongoose.Schema({
    user : {
        type: String,
        required: true,
    },
    travelStop : {
        type: String,
        required: true,
    },
    body : {
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

module.exports = mongoose.model('comments', Comments);
