console.log("Location JS loaded");

var id;

// Set location when the page loads
$( document ).on('turbolinks:load', function() {
  
  var tile_layer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  	attribution = 'Map data: &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors | &copy; TrackMe!',
  	maxZoom = 19;

  L.tileLayer(tile_layer, {attribution, maxZoom}).addTo(map);
  map.options.scrollWheelZoom = true;
  map.options.doubleClickZoom = true;

  if(navigator.geolocation)
  	navigator.geolocation.getCurrentPosition(myLocation);
  else
  	map.setView([0, 0], 2);
})

// Toggle Live Tracking
window.liveTrack = function(){
  var checkbox = document.getElementById('liveTrack');
  if (checkbox.checked == true){
    console.log('Live tracking started');
    options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };
    id = navigator.geolocation.watchPosition(myLocation, error, options);
  }
  else{
    console.log('Live tracking stopped');
    navigator.geolocation.clearWatch(id);
  }
}

// Update the Map and marker
myLocation = function(position){
  const nav_lat = position.coords.latitude,
      nav_lng = position.coords.longitude;

  console.log("(Lat - Lng): " + convertDMS(nav_lat, nav_lng));
  document.getElementById('latlng').textContent = convertDMS(nav_lat, nav_lng);

  map.setView([nav_lat, nav_lng], map.getZoom() ? map.getZoom() : 15);
  marker.setLatLng([nav_lat, nav_lng]);    
}

// Format the coordinates
function convertDMS( lat, lng ) {
 
  var convertLat = Math.abs(lat);
  var LatDeg = Math.floor(convertLat);
  var LatSeg = (convertLat - LatDeg) * 3600
  var LatMin = Math.floor(LatSeg / 60);
  LatSeg = Math.round(100*(LatSeg - (LatMin * 60)))/100;
  var LatCardinal = ((lat > 0) ? "N" : "S");
   
  var convertLng = Math.abs(lng);
  var LngDeg = Math.floor(convertLng);
  var LngSeg = (convertLng - LngDeg) * 3600
  var LngMin = Math.floor(LngSeg / 60);
  LngSeg = Math.round(100*(LngSeg - (LngMin * 60)))/100;
  var LngCardinal = ((lng > 0) ? "E" : "W");
   
  return LatDeg + 'º ' + LatMin + '′ ' + LatSeg + '″' + LatCardinal   + "  -  " + LngDeg + 'º ' + LngMin + '′ ' + LngSeg + '″' + LngCardinal;
}

// Log any error form live tracking
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}