const mongoose = require('mongoose');
const travelStop = require('../models/travelStop');

// 작성자, 작성 시간, 글 내용,  T-Stop 번호, 추천수
const Board = new mongoose.Schema({
  travelStopIdx : {
    type: Number,
    ref: 'travelStop',
    required: true
  },
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
  description : {
    type: String,
    require: true,
  }
}, {
    timestamps: true
});

Board.statics.create = function(travelStopIdx, username, lat, lng, memo) {
    return (new this({
      travelStopIdx: travelStopIdx,
      username: username,
      memo: memo,
      lat: lat,
      lng: lng
    })).save()
};

Board.statics.select = function(param) {
    return this.findOne(param);
};

Board.statics.selectAll = function(param) {
  return this.find(param);
};

Board.statics.edit = function(param) {
  return this.findOneAndUpdate(param);
};

Board.statics.delete = function(param) {
  return this.findOneAndDelete(param);
};

module.exports = mongoose.model('board', Board);
