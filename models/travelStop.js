const mongoose = require('mongoose');
const board = require('../models/board');

const TravelStop = new mongoose.Schema({
  lat : {
      type: Number,
      required: true,
  },
  lon : {
      type: Number,
      require: true
  },
  name : {
    type: String,
    require: true,
  },
  description : {
    type: String,
    require: true,
  },
  image : {
    type: String,
    require: true
  },
  count : {
    type: Number,
    require: true
  }
}, {
    timestamps: true
});

TravelStop.statics.create = function(lat, lon, name, description, image) {
    return (new this({
      title: title,
      description: description,
      lat: lat,
      lng: lng,
      image: image
    })).save()
};

TravelStop.statics.select = function(param) {
    return this.findOne(param);
}

TravelStop.statics.selectAll = function(param) {
  return this.find(param);
}

module.exports = mongoose.model('travelStop', TravelStop);
