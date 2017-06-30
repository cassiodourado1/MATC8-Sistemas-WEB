function renderGMaps() {
  var geocoder = new google.maps.Geocoder();
  var element  = document.getElementById('gmaps-data');
  var address  = (element.textContent == undefined) ? element.innerText : element.textContent;
  var marker;

  geocoder.geocode({ 'address': address + ', Brasil', 'region': 'BR' }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var mapOptions = {
        zoom:   16,
        center: results[0].geometry.location
      }
      var marker = new google.maps.Marker({
        position: results[0].geometry.location,
      });
    } else {
      var mapOptions = {
        zoom:   8,
        center: new google.maps.LatLng(-23.6824124, -46.5952992)
      }
    }

    map = new google.maps.Map(document.getElementById('mapa'), mapOptions)
    if (marker) { marker.setMap(map); };

    //google_maps
    if (document.getElementById('data') != null) {
      var tag_content = "";
      var result = results[0].address_components;
      var postal_code, route, neighborhood, locality, state, state;

      $.each(result, function(index, value){
        type = value.types[0]

        switch(type) {
          case "postal_code":
            postal_code = value.long_name;
            break;
          case "postal_code_prefix":
            postal_code = value.long_name + "000";
            break;
          case "route":
            route = value.long_name;
            break;
          case "neighborhood":
            neighborhood = value.long_name;
            break;
          case "locality":
            locality = value.long_name;
            break;
          case "administrative_area_level_1":
            state = value.short_name;
            break;
        }
      });

      if (postal_code  == undefined) { postal_code  = "-" }
      if (route        == undefined) { route        = "-" }
      if (neighborhood == undefined) { neighborhood = "-" }
      if (locality     == undefined) { locality     = "-" }
      if (state        == undefined) { state        = "-" }

      tag_content += "<td>" + postal_code  + "</td>";
      tag_content += "<td>" + route        + "</td>";
      tag_content += "<td>" + neighborhood + "</td>";
      tag_content += "<td>" + locality     + "</td>";
      tag_content += "<td>" + state        + "</td>";

      $('#data').replaceWith(tag_content);
    }
  });
}

$(window).load(function() {
  var url = 'https://maps.googleapis.com/maps/api/js?v=3.exp';
      url = url + '&sensor=false';
      url = url + '&language=pt_br';
      url = url + '&callback=renderGMaps';

  $.getScript(url);
});
