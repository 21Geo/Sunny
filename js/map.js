var map;
var locations = {};

function initMap() {
	locations.saskatoon  = new google.maps.LatLng({lat: 52.126327, lng: -106.659138 });
	// locations.company  = new google.maps.LatLng({lat: 52.081400, lng: -106.580065 });
  locations.company  = new google.maps.LatLng({lat: 52.161999, lng: -106.660775 });

  map = new google.maps.Map(document.getElementById('contact-map'), {
    center: locations.saskatoon,
    zoom: 11,
    scrollwheel: false
  });	
  
  var com_location = new google.maps.Marker({
          position: locations.company,
          map: map,
          title: 'Sunny Auto Service'
		});
} // end initMap

function handleNoGeolocation(errorFlag) {
	var err = '';
  if (errorFlag == true) {
  	err = "Geolocation service failed."
    alert(err);
  } else {
  	err = "Your browser doesn't support geolocation.";
    alert(err);
  }
  map.setCenter(locations.saskatoon);
  
  $('#travel-instructions').html(err);
}

function getUserLocation(cb){
  // Try W3C Geolocation (Preferred)
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      locations.user = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(locations.user);

      var usr_location = new google.maps.Marker({
      position: locations.user,
      map: map,
      icon: new google.maps.MarkerImage(
        'img/user.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(32, 32)
      )});
      if(typeof cb == 'function') cb.call();
    }, function(err) {
      console.log(err);
      handleNoGeolocation(browserSupportFlag);
    }, { timeout: 3000 });
  }
  // Browser doesn't support Geolocation
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }
}

function getDirections(){
	var directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    polylineOptions: { strokeColor: "#006dcc" }
  });
  var directionsService = new google.maps.DirectionsService;
  directionsDisplay.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsDisplay);
  document.getElementById('travel-mode').addEventListener('change', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var selectedMode = document.getElementById('travel-mode').value;
  directionsService.route({
    origin: locations.user,
    destination: locations.company,
    // Note that Javascript allows us to access the constant
    // using square brackets and a string value as its
    // "property."
    travelMode: google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
    	printTravelInstructions(response);
      directionsDisplay.setDirections(response);
      $('#show-route').prop('disabled', false);
    } else {
    	var err = 'Directions request failed due to ' + status;
      window.alert(err);
      $('#travel-instructions').html(err);
    }
  });
}

function printTravelInstructions(resp){

	var div = $('#travel-instructions');
	var cont = '';
	
	var rn = resp.routes.length;
	if(rn>1) cont += '<ul>';
	for (var r = 0; r < rn; r++) {
		if(rn>1) cont += '<li>';

		var route = resp.routes[r];
		var ln = route.legs.length;
		if(ln>1) cont += '<ul>';
		for (var l = 0; l < ln; l++) {
			if(ln>1)  cont += '<li>';

			var leg = route.legs[l];
			cont+= '<ul>';
			for (var s = 0; s < leg.steps.length; s++) {
				cont += '<li>' + leg.steps[s].instructions + '</li>';
			};
			cont += '<ul>';

			if(ln>1) cont += '</li>';
		};
		if(ln>1) cont += '</ul>';

		if(rn>1) cont += '</li>';
	};
	if(rn>1) cont += '</ul>';
	div.html(cont);
}