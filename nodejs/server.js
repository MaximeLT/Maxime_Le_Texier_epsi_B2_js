var express = require('express');
var app = express();
var d = new Date();
var date = {year:d.getFullYear(), month:d.getMonth(), day:d.getDay()};
var dateString = JSON.stringify(date);

app.get('/service', function (req, res) {
  res.send(dateString);
});

app.listen(8080, function(){
  console.log('listening on *:8080');
});
