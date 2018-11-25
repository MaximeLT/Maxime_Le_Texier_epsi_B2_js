var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.json());

app.post('/', function(request, response){
  response.send(request.body);
  console.log(request.body);
  var json = JSON.stringify(request.body);

  if (fs.existsSync('data.json')) {
    fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
        obj = JSON.parse(data);
        var alreadyInFile = false;
        for (var i = 0; i < obj.table.length; i++) {
          if (obj.table[i].campusActuel == request.body.campusActuel) {
            alreadyInFile = true;
          }
        }
        if (alreadyInFile == false) {
          obj.table.push(request.body);
          json = JSON.stringify(obj, null, 2);
          fs.writeFileSync('data.json', json, 'utf8');
        } else {
          console.log("Campus deja noté");
        }
    }});
  } else {
    obj = {
      table : []
    }
    obj.table.push(request.body);
    json = JSON.stringify(obj, null, 2);
    fs.writeFileSync('data.json', json, 'utf8');
  }

});

app.get('/notation', function (req, res) {
  if (req.query.type == "accueil") {
    res.sendFile(__dirname + "/accueil.html");
  } else if (req.query.type == "resultats") {
    res.sendFile(__dirname + "/resultats.html");
  } else if (req.query.type == "dataJSON") {
    res.sendFile(__dirname + "/data.json");
  } else {
    res.send("erreur 404: Page non-existante, Ce chemin n'a pas été configuré");
  }

});

app.listen(3000, function(){
  console.log('listening on *:3000');
});
