
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
    var xmlreq = CriaRequest();

    xmlreq.open("GET", "php/fornecedor/carregaTodosForneced.php", true);

    xmlreq.onreadystatechange = function () {
        if (xmlreq.readyState == 4) {
            if (xmlreq.status == 200) {
                var jsonObj = JSON.parse(xmlreq.responseText);
                adicionaMarkersnoMapa(jsonObj);
            }
        }
    };
    xmlreq.send(null);
}

function initialize() {
    var latlng = new google.maps.LatLng(-12.8610198,-38.3938467);
    var options = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);

    geocoder = new google.maps.Geocoder();
}

function adicionaMarkersnoMapa(jsonObj) {
    //jsonObj é um array json contendo latitude e longitude

    var markersArray = [];

    for (var key in jsonObj) {
        var newMarker = new google.maps.Marker({
            map: map,
            draggable: false,
            position: {
                lat: parseFloat(jsonObj[key].latitude),
                lng: parseFloat(jsonObj[key].longitude)
            }
        });
        newMarker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')


        console.log(jsonObj);
        message = jsonObj[key].nome + "<br>Telefone: " + jsonObj[key].telefone + "<br>Site: " + jsonObj[key].site;

        newMarker['infoWindow'] = new google.maps.InfoWindow({
            content: message
        });

        google.maps.event.addListener(newMarker, 'click', function () {
            this['infoWindow'].open(map, this);
        });

        markersArray.push(newMarker);
        //var location = new google.maps.LatLng(jsonObj[key].latitude, jsonObj[key].longitude);
        //marker.setPosition(location);
    }
}

$(document).ready(function () {
    var map;

    initialize();
    pegaTodosFornecedLatlg();
});
