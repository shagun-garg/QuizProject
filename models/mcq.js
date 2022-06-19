var mongoose = require('mongoose');

var mcqSchema = new mongoose.Schema({
    question: String,
    opt1: String,
    opt2: String,
    opt3: String,
    opt4: String,
    answer: String,
    mark: Number,
});

module.exports = mongoose.model('MCQ', mcqSchema);