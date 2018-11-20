const mongoose = require('mongoose');
const travelStop = require('../models/travelStop');

// 작성자, 작성 시간, 글 내용,  T-Stop 번호, 추천수
const Board = new mongoose.Schema({
  travelStopIdx : {
    type: Number,
    ref: 'travelStop',
    required: true
  },
  count : {
    type: Number,
    required: true
  },
  like : {
    type: Number,
    required: true
  }
  writer : {
    type: String,
    required: true,
    unique: true
  },
  lat : {
      type: Number,
      required: true
  },
  lng : {
      type: Number,
      require: true
  },
  memo : {
    type: String,
    require: true
  },
  tier : {
    type: String,
    require: true
  }
}, {
    timestamps: true
});

Board.statics.create = function(travelStopIdx, writer, lat, lng, memo) {
  return (new this({
    travelStopIdx: travelStopIdx,
    writer: writer,
    memo: memo,
    lat: lat,
    lng: lng
  })).save()
};

Board.statics.select = function(param) {
  return this.findById(param);
};

Board.statics.selectAll = function(param) {
  return this.find(param);
};

Board.statics.edit = function(param, set) {
  return this.findByIdAndUpdate(param, set);
};

Board.statics.delete = function(param) {
  return this.findByIdAndDelete(param);
};

module.exports = mongoose.model('board', Board);
