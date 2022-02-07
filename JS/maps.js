// JAVASCRIPT API
// Initialize and add the map

function initMap() {
  const uluru = { lat: 49.2428695, lng: 8.6406787 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}