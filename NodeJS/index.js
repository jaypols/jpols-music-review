const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

var openController = require('./controllers/openController.js');
var secureController = require('./controllers/secureController.js');
// var userController = require('./controllers/userController.js');

mongoose.connect('mongodb+srv://jayson:HoustonRockets1@cluster0-hjcjx.mongodb.net/music?retryWrites=true&w=majority',{ useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('MongoDB Connected!')
    else
        console.log('MongoDB Connection Failed: ' + JSON.stringify(err, undefined, 2));
});
module.exports = mongoose;

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    next();
  });

var port = process.env.PORT || 8080; 
app.listen(port, () => console.log('Server is running at port 8080'));

app.use('/api/open', openController);
app.use('/api/secure', secureController);