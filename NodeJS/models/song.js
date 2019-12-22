var mongoose = require('mongoose');

var Song = mongoose.model('Song', 
{
    objectID: {type: Number, require:true, unique:true},
    songTitle: {type: String, require:true},
    artist: {type: String, require:true},
    album: {type: String},
    year: {type: String},
    comment: {type: String},
    genre: {type: String},
    avgRating: {type: Number, require:true, default:0},
    numReviews: {type: Number, require:true, default:0},
    numRating: {type: Number, require:true, default:0},
    visibility: {type: Boolean, require:true, default:true},
    copyright: {type: Boolean, require:true, default:false}
});

module.exports = { Song };