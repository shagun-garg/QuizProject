var mongoose = require('mongoose');

var Smarks = new mongoose.Schema({
    topicmarks: Number,


});


module.exports = mongoose.model('smarks', mcqSchema);