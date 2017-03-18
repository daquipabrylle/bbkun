
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 9000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'HOMEPAGE.html'));
});
app.get('/app1', function(req, res){
  res.sendFile(path.join(__dirname, 'app1.html'));
});
app.get('/app2', function(req, res){
  res.sendFile(path.join(__dirname, 'app2.html'));
});
app.get('/app3', function(req, res){
  res.sendFile(path.join(__dirname, 'app3.html'));
});
app.get('/app4', function(req, res){
  res.sendFile(path.join(__dirname, 'app4.html'));
});
app.get('/app5', function(req, res){
  res.sendFile(path.join(__dirname, 'app.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});

var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});