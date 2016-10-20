config = require('config')
db = require('../models/db.js');
reord = require('../models/record.js');
mongoose = require('mongoose');

class DatabaseManager

  constructor: () ->

  store: (key, url, callback) ->
    Record = mongoose.model('Record');
 
    post = new Record();
    post.key = key
    post.url = url
    post.save (err) ->
      if (!err) 
        console.log('Success!')
        return callback(err,key)
      else
        return callback(err,key)

  find: (key, callback) ->
    Record = mongoose.model('Record')
    Record.findOne {"key": key}, (err, result) ->
      return callback(err,result)

module.exports = DatabaseManager
