var mongoose = require('mongoose');

var Review = mongoose.model('Review', 
{
    objectID: {type: Number, require:true},
    submittedBy: {type: String, require:true},
    submittedOn: {type: Date, default:Date.now, require:true},
    avgRating: {type: Number, default:0},
    ratingForObject: {type: Number, require:true},
    description: {type: String},
    numRating: {type: Number, default:0}
});

module.exports = { Review };