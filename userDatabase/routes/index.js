var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page */
router.get('/helloworld', function(req, res) {
	res.render('helloworld', {title: 'Hello, World!'})
});

/* GET UserList page */
//extracts 'db' object in http request to fill 'docs' var with
//database documents
router.get('/userlist', function(req, res){
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({}, {}, function(e, docs){
		res.render('userlist', {
			"userlist" : docs
		});
	});
});

module.exports = router;
