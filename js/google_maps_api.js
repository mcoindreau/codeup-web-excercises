(function() {
    "use strict";

    //set map options
    var mapOptions = {

        // Set zoom level
        zoom: 19,

        // Set center of the map
        center: {
            lat: 29.571711, lng: -98.597039
        }
    };


    // Include code from previous example

    // Set our address to geocode
    var address = "5811 University Heights Blvd, San Antonio, TX 78249";

    // Init geocoder object
    var geocoder = new google.maps.Geocoder();

    // Geocode our address
    geocoder.geocode({ "address": address }, function(results, status) {

        // Check for a successful result
        if (status == google.maps.GeocoderStatus.OK) {

            // Recenter the map over the address
            map.setCenter(results[0].geometry.location);
        } else {

            // Show an error message with the status if our request fails
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });


    // Render map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // Create lat and long for our marker position
    var picnik = { lat: 29.571711, lng: -98.597039};
    29.571745

// Add the marker to our existing map
    var marker = new google.maps.Marker({
        position: picnik,
        map: map
    });

    // Create a new infoWindow object with content
    var infowindow = new google.maps.InfoWindow({
        content: "<span style='align:center;'> Best burgers ever!<br><strong>Yummmmm</strong></span>"
    });

    // Open the window using our map and marker
    infowindow.open(map, marker);

    //map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

})();