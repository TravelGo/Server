const mongoose = require('mongoose');

// 작성자, 작성 시간, 글 내용,  T-Stop 번호, 추천수
const Board = new mongoose.Schema({
  username : {
    type: String,
    required: true,
    unique: true
  },
  lat : {
      type: Number,
      required: true,
  },
  lng : {
      type: Number,
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

Board.statics.create = function(username, lat, lng, title, description, image) {
    return (new this({
      username: username,
      description: description,
      lat: lat,
      lng: lng,
      image: image
    })).save()
};

Board.statics.select = function(param) {
    return this.findOne(param);
};

Board.statics.selectAll = function(param) {
  return this.find(param);
}

module.exports = mongoose.model('board', Board);
