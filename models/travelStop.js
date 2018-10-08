const mongoose = require('mongoose');

const TravelStop = new mongoose.Schema({
}, {
    timestamps: true
});

TravelStop.statics.create = function(username, password, fullname, phone) {
    return (new this({
        username : username,
        password : password,
        fullname : fullname,
        phone : phone
    })).save()
};

TravelStop.statics.select = function(param) {
    return this.findOne(param);
}

module.exports = mongoose.model('travelStop', TravelStop);

