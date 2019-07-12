var map, infoWindow;
var markers = [];
var currentLocation;

function makeMarkers() {
  infoWindow = new google.maps.InfoWindow();
  map.data.forEach(function(feature) {
    var latitude = feature
      .getGeometry()
      .get()
      .lat();
    var longitude = feature
      .getGeometry()
      .get()
      .lng();

    var marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      animation: google.maps.Animation.DROP
    });
    markers.push(marker);
  });
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.9446, lng: -122.109 },
    zoom: 13
  });
  geojson_url =
    "https://raw.githubusercontent.com/gizm00/blog_code/master/appendto/python_maps/collection.geojson";

  map.data.loadGeoJson(geojson_url, null, makeMarkers);
  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        //infoWindow.setPosition(pos);
        //infoWindow.setContent(currentLocation);
        infoWindow.open(map);
        map.setCenter(pos);

        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          animation: google.maps.Animation.DROP,

          title: "My Location"
        });
        marker.setMap(map);

        //geocoding to retrieve address
        $.get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            position.coords.latitude +
            "," +
            position.coords.longitude +
            "&key=AIzaSyBHfSTewKxHRW-YS0TT2diFo5IdrQeeml4",
          function(data) {
            currentLocation = data.results[0].formatted_address;
          }
        );
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
