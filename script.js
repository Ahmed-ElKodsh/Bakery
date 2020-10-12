function initMap() {
  let location = { lat: 53.497040, lng: -2.246310 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location
  });
  var marker = new google.maps.Marker({ position: location, map: map });
}