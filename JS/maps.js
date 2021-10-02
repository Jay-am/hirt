// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 49.2428695, lng: 8.6406787 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// let autocomplete = new google.maps.places.Autocomplete(DOM_NODE);
// autocomplete.bindTo('bounds', map);
// autocomplete.addListener('place_changed', () => {
//   const place = autocomplete.getPlace();
// };

// const calculteAndRenderDirections = (origin, destination) => {
//   let directionsService = new google.maps.DirectionsService (),
//   directionsDisplay = new google.maps.DirectionsRenderer (),
//   request = { origin: origin,
//   destination: destination,
//   }
//   directionsDisplay.setMap(map);
//   directionsService.route(request, (result, status) => {
//     if (status == 'OK') {
//       directionsDisplay.setDirections(result);
//     }
//   }
// }