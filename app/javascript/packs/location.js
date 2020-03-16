console.log("Location JS loaded");


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