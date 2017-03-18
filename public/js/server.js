//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'HOMEPAGE.html'));
});
app.get('/part1', function(req, res){
  res.sendFile(path.join(__dirname, 'app1.html'));
});
app.get('/part2', function(req, res){
  res.sendFile(path.join(__dirname, 'app2.html'));
});
app.get('/part3', function(req, res){
  res.sendFile(path.join(__dirname, 'app3.html'));
});
app.get('/part4', function(req, res){
  res.sendFile(path.join(__dirname, 'app4.html'));
});
app.get('/part5', function(req, res){
  res.sendFile(path.join(__dirname, 'app.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});