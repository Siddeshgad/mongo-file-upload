// Generated by CoffeeScript 1.10.0
var DatabaseManager, config, db, mongoose, reord;

config = require('config');

db = require('../models/db.js');

reord = require('../models/record.js');

mongoose = require('mongoose');

DatabaseManager = (function() {
  function DatabaseManager() {}

  DatabaseManager.prototype.store = function(key, url, callback) {
    var Record, post;
    Record = mongoose.model('Record');
    post = new Record();
    post.key = key;
    post.url = url;
    return post.save(function(err) {
      if (!err) {
        console.log('Success!');
        return callback(err, key);
      } else {
        return callback(err, key);
      }
    });
  };

  DatabaseManager.prototype.find = function(key, callback) {
    var Record;
    Record = mongoose.model('Record');
    return Record.findOne({
      "key": key
    }, function(err, result) {
      return callback(err, result);
    });
  };

  return DatabaseManager;

})();

module.exports = DatabaseManager;
