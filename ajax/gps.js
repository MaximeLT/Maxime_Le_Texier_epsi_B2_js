function drawPopup(lon, lat, desc) {
	var marker = L.marker([lon, lat]).addTo(map);
	marker.bindPopup(desc).openPopup();
}

var stringResponse;

function loadOpenData() {
      // alert('loadData');

      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.clear();
          stringResponse = this.responseText;
          var objectResponse = JSON.parse(stringResponse);
          console.log(this.responseText);
          console.log(objectResponse);
          for (var i = 0; i < objectResponse.records.length; i++) {
              var lat = objectResponse.records[i].fields.geo_point_2d[0];
              var lon = objectResponse.records[i].fields.geo_point_2d[1];
              var desc = objectResponse.records[i].fields.adresse;
              drawPopup(lat, lon, desc);
          }
        }
      };

      var service = 'https://opendata.paris.fr//api/records/1.0/search/?dataset=etablissements-scolaires';
      // Attention cross origin

      xhttp.open("GET", service, true);
      xhttp.send();
    }

function init() {
  var button = document.getElementById('buttonload');
  button.addEventListener('click', loadOpenData);
}