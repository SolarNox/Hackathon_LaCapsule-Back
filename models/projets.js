var mongoose = require('mongoose');

var stackFrontSchema = mongoose.Schema({
 title: String,
});

var stackBackSchema = mongoose.Schema({
 title: String,
});

var projetsSchema = mongoose.Schema({
 stack_front: [stackFrontSchema],
 stack_back: [stackBackSchema],
 _id: String,
 idproject: Number,
 name: String,
 desc: String,
 pic_url: String,
 days_spent: Number
});

var projetsModel = mongoose.model('projets', projetsSchema);

module.exports = projetsModel;

//[{type: mongoose.Schema.Types.ObjectId, ref: "stacks"}]
