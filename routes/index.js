var express = require('express');
var app = express();
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/'});
var DatabaseManager = require('../managers/DatabaseManager.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/store', upload.single('displayImage'), function(req, res, next) {
  var databaseObj = new DatabaseManager();
  path = req.file.path.replace("public", "")
  databaseObj.store(req.file.filename, req.file.path, function(err, result) {
    if (err) {
      res.render('error',{message: err,status : 404});
    } else {
      res.render('image',{key: req.file.filename, url: path});
    }
  });
});

router.get('/views/uploaded/:key', function(req, res, next) {
  var databaseObj = new DatabaseManager();
  databaseObj.find(req.params.key, function(err, result) {
    if (err) {
      res.render('error',{message: err,status : 404});
    } else {
      result.url = result.url.replace("public", "")
      res.render('image',{key: result.key, url:  result.url});
    }
  });
});

module.exports = router;
