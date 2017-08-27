var geocoder;
var map;
var marcador;

var latitude;
var longitude;

var logradouro;
var numero;
var bairro;
var cidade;
var uf;
var endereco;

function initialize() {
    var latlng = new google.maps.LatLng(-13.0024602, -38.5089752);
    var options = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);
    geocoder = new google.maps.Geocoder();
    marcador = new google.maps.Marker({
        map: map,
        draggable: true,
    });

    marcador.setPosition(latlng);
}

function carregarNoMapa(endereco) {
    geocoder.geocode({'address': endereco + ', Brasil', 'region': 'BR'}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            if (results[0]) {
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();

                var location = new google.maps.LatLng(latitude, longitude);
                marcador.setPosition(location);
                map.setCenter(location);
                map.setZoom(16);
            }
        } else {
            alert("Um erro ocorreu, contacte o desenvolvedor." + status);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initialize();

    var btnMapsDiv = document.getElementById("btnMaps");
    if (btnMapsDiv) {
        btnMapsDiv.onclick = function () {

            logradouro = document.getElementById("logradouro").value;
            numero = document.getElementById("numero").value;
            bairro = document.getElementById("bairro").value;
            cidade = document.getElementById("cidade").value;
            uf = document.getElementById("uf").value;

            endereco = logradouro + ", " + numero + " - " + bairro + ", " + cidade + " - " + uf;
            carregarNoMapa(endereco);
        }
    }
});
