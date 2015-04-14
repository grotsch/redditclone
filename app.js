var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
mongoose.connect('mongodb://topicsAdmin:root@75.126.149.8:17824/topics');

var commentSchema = {
	name: String,
	comment: String
	}
	
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/webapps/grotschnode/html/index.html');
});

var sportscomments = mongoose.model('sportscomment', commentSchema, 'sports');
app.get('/sports', function(req, res) {
	res.sendFile(__dirname + '/webapps/grotschnode/html/sports.html');
	//sportscomments.find(function (err, doc){
	//res.json(doc);
	//})
});

var politicscomments = mongoose.model('politicscomment', commentSchema, 'politics');
app.get('/politics', function(req, res) {
	res.sendFile(__dirname + '/webapps/grotschnode/html/politics.html');
	//politicscomments.find(function (err, doc){
	//es.json(doc);
	//})
});

var techcomments = mongoose.model('techcomment', commentSchema, 'technology');
app.get('/technology', function(req, res) {
	res.sendFile(__dirname + '/webapps/grotschnode/html/technology.html');
	//techcomments.find(function (err, doc){
	//res.json(doc);
	//})
});

var moviecomments = mongoose.model('moviecomment', commentSchema, 'movies');
app.get('/movies', function(req, res) {
	//res.sendFile(__dirname + '/webapps/grotschnode/html/movies.html');
	moviecomments.find(function (err, doc)
	{
		res.json(doc);
	})
});

app.post('/sports', function(req,res){
	sportscomments.save({
		name: req.param('name'),
		comment: req.param('comment')
		}, function(error, docs){
			res.redirect('/')
		});
});

app.post('/politics', function(req,res){
	politicscomments.save({
		name: req.param('name'),
		comment: req.param('comment')
		}, function(error, docs){
			res.redirect('/')
		});
});

app.post('/technology', function(req,res){
	techcomments.save({
		name: req.param('name'),
		comment: req.param('comment')
		}, function(error, docs){
			res.redirect('/')
		});
});

app.post('/movies', function(req,res){
	moviecomments.save({
		name: req.param('name'),
		comment: req.param('comment')
		}, function(error, docs){
			res.redirect('/')
		});
});



app.listen(process.env.PORT || 19044);

console.log('server running at http://75.126.149.8:19044/');


