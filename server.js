var express = require('express');
var _ = require('underscore');
var app = express();
var server = require('http').createServer(app);
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var config = require('./lib/config');// run my config module
var redis = require("redis");
var connect = require('connect');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// backend database
var dbType = config.dbType;
app.locals.dbType = dbType;
// show current env
console.log(config.env);
// db client 
var client = null;
client = redis.createClient(config.redis_port, config.redis_host);
client.auth(config.redis_auth);

app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use('/public', express.static('public'));
app.use(methodOverride());
app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret: guid()}));

//helper method for writing out json payloads
var json = function(res, data) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

  if(typeof data === "string") 
	  res.write(data);
  else 
	  res.write(JSON.stringify(data));
  res.end();
};

// get a random id
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}

// URL process
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/todos', function(req, res) {
    var values;
    client.hgetall("todos", function (err, data) {
      json(res, data);
	});
});

app.post('/todos/create', function(req, res) {
    var id = guid();
	if(req.body.description == "")
		return;
    client.hset("todos", id, req.body.description);
    json(res, { id: id });
});

app.post('/todos/update', function(req, res) {
	if(req.body.description == "")
		return;
    client.hset("todos", req.body.id, req.body.description);
    json(res, {});
});

app.post('/todos/delete', function(req, res) {
  var id = req.body.id;
    client.hdel("todos", id);
    json(res, {});
});

// begin to listen 
server.listen(config.port);
