function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -7.757380, lng: 110.370741};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Yogyakarta, INA' // Title Location
    });
}
