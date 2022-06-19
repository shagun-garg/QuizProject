var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
    topicName: String,
    performance: [{
        username: String,
        marks: Number
    }],
    marks: {
        type: Number, // Number type
        default: 0,
    },
    passMarks: {
        type: Number, // Number type
        default: 0,
    },
    time: Number,
    mcqs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MCQ'
    }]
});

module.exports = mongoose.model('Topic', topicSchema);