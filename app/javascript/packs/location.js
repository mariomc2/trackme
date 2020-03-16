console.log("Location JS loaded");

$( document ).on('turbolinks:load', function() {
  
  var tile_layer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  	attribution = 'Map data: &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors | &copy; TrackMe!',
  	maxZoom = 19;

  L.tileLayer(tile_layer, {attribution, maxZoom}).addTo(map);
  map.options.scrollWheelZoom = 'center';
  map.options.doubleClickZoom = 'center';

  var legend = L.control({position: 'bottomright'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend leaflet-control-attribution');
    div.innerHTML = "<div id='legend'>-</div>";
    return div;
  };
  legend.addTo(map);

  map.setView([0, 0], 0);
})


window.myLocation = function(){
	if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const nav_lat = position.coords.latitude,
            nav_lng = position.coords.longitude;
        console.log("(Lat - Lng): " + convertDMS(nav_lat, nav_lng));
        //$('#lat').textContent = nav_lat;
        //$('#lng').textContent = nav_lng;
        document.getElementById('lat').textContent = nav_lat;
        document.getElementById('lng').textContent = nav_lng;
        map.setView([nav_lat, nav_lng], 15);
      });
    }
}

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
   
  return LatDeg + 'º' + LatMin + '′' + LatSeg + '″' + LatCardinal   + " " + LngDeg + 'º' + LngMin + '′' + LngSeg + '″' + LngCardinal;
}