var map;
function initMap() {
   
    const mapPoint = { lat:40.873664, lng:14.281704 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: mapPoint,
      });
      const marker = new google.maps.Marker({
        position:mapPoint,
        map: map,
      });
    
}



