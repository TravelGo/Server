const mongoose = require('mongoose');

const TravelStop = new mongoose.Schema({
  lat : {
      type: float,
      required: true,
  },
  lng : {
      type: float,
      require: true
  },
  title : {
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
  }
}, {
    timestamps: true
});

TravelStop.statics.create = function(title, description, lat, lng, image) {
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

module.exports = mongoose.model('travelStop', TravelStop);
