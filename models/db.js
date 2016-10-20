var config = require('config')
var mongoose = require('mongoose');

var url = "mongodb://" + config.get('dbConfig').host + ":" + config.get('dbConfig').port + "/" + config.get('dbConfig').dbName
mongoose.connect(url);