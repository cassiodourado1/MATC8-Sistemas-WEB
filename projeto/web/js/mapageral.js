
  function CriaRequest() {
      try {
          request = new XMLHttpRequest();
      } catch (IEAtual) {
          try {
              request = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (IEAntigo) {
              try {
                  request = new ActiveXObject("Microsoft.XMLHTTP");
              } catch (falha) {
                  request = false;
              }
          }
      }
      if (!request)
          alert("Seu Navegador não suporta Ajax!");
      else
          return request;
  }

  //pega dados de latitude e longetude de todos os fornecedores do banco
  function pegaTodosFornecedLatlg() {
      //Declaração de Variáveis
      var xmlreq = CriaRequest();
      //alert(latitude + " e " + longitude);
      
      xmlreq.open("GET", "php/fornecedor/carregaTodosForneced.php", true);
      
      xmlreq.onreadystatechange = function () {
          if (xmlreq.readyState == 4) {
              if (xmlreq.status == 200) {
                  var resposta = xmlreq.responseText;
                  var jsonObj = JSON.parse(xmlreq.responseText);
                  adicionaMarkersnoMapa(jsonObj);
              }
          }
      };
      xmlreq.send(null);
  }

function initialize() {
    var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
    var options = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);

    geocoder = new google.maps.Geocoder();
}

function adicionaMarkersnoMapa(jsonObj){
  //jsonObj é um array json contendo latitude e longitude
  
  var markersArray = [];

  for(var key in jsonObj){
    var newMarker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: {
          lat: parseFloat(jsonObj[key].latitude), 
          lng: parseFloat(jsonObj[key].longitude)
        }
    });
    markersArray.push(newMarker);
    //var location = new google.maps.LatLng(jsonObj[key].latitude, jsonObj[key].longitude);
    //marker.setPosition(location);
  }
  
}

$(document).ready(function(){
    var map;

    initialize();
    pegaTodosFornecedLatlg();
});
