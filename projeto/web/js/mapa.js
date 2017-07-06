var geocoder;
var map;
var marker;

var latitude;
var longitude;

var logradouro;
var numero;
var bairro;
var cidade;
var uf;

var endereco;

function initialize() {
    var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
    var options = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
    });

    marker.setPosition(latlng);
}

$(document).ready(function () {
    initialize();

    function carregarNoMapa(endereco) {
        geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    latitude = results[0].geometry.location.lat();
                    longitude = results[0].geometry.location.lng();

                    $('#txtLatitude').val(latitude);
                    $('#txtLongitude').val(longitude);
                    
                    

                    var location = new google.maps.LatLng(latitude, longitude);
                    marker.setPosition(location);
                    map.setCenter(location);
                    map.setZoom(16);
                }
            }
        });
    }

    $("#btnMaps").click(function() {

        logradouro = $("#logradouro").val();
        numero = $("#numero").val();
        bairro = $("#bairro").val();
        cidade = $("#cidade").val();
        uf = $("#uf").val();

        endereco = logradouro + ", "+numero+" - "+bairro+", "+cidade+" - "+uf;

       // alert(endereco);

        carregarNoMapa(endereco); // Esse parte. De passar como parametro.
    })
});
