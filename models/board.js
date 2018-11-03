const mongoose = require('mongoose');

// 작성자, 작성 시간, 글 내용,  T-Stop 번호, 추천수 
const Board = new mongoose.Schema({
}, {
    timestamps: true
});

// Board.statics.create = function(title, description, lat, lng, image) {
//     return (new this({
//       title: title,
//       description: description,
//       lat: lat,
//       lng: lng,
//       image: image
//     })).save()
// };

Board.statics.select = function(param) {
    return this.findOne(param);
}

module.exports = mongoose.model('board', Board);
