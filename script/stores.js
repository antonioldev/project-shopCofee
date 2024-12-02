function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		var i;
		for (i = 0; i < stores.length; i++) {
			stores[i].distanceGPS = "Geolocation is not supported by this browser.";
			document.getElementById("locationDistance_" + i).style.fontSize = "small";
			document.getElementById("main").style.opacity = "1";
			document.getElementById("main_2").style.opacity = "1";
			document.getElementById("logo").style.animationPlayState = "paused";
			document.getElementById("logo").style.display = "none";
		}
		fillText();
	}
}

function showError(error) {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("main").style.opacity = "1";
	document.getElementById("main_2").style.opacity = "1";
	document.getElementById("logo").style.animationPlayState = "paused";
	document.getElementById("logo").style.display = "none";
	var i;
	for (i = 0; i < stores.length; i++) {
		document.getElementById("locationDistance_" + i).style.fontSize = "small";
		switch (error.code) {
			case error.PERMISSION_DENIED:
				stores[i].distanceGPS = "User denied the request for Geolocation.";
				break;
			case error.POSITION_UNAVAILABLE:
				stores[i].distanceGPS = "Location information is unavailable.";
				break;
			case error.TIMEOUT:
				stores[i].distanceGPS = "The request to get user location timed out.";
				break;
			case error.UNKNOWN_ERROR:
				stores[i].distanceGPS = "An unknown error occurred.";
				break;
		}
	}
	fillText();
}

function showPosition(position) {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("main").style.opacity = "1";
	document.getElementById("main_2").style.opacity = "1";
	document.getElementById("logo").style.animationPlayState = "paused";
	document.getElementById("logo").style.display = "none";
	var i;
	for (i = 0; i < stores.length; i++) {
		var aLat = stores[i].latitude;
		var aLon = stores[i].longitude;
		var bLat = position.coords.latitude;
		var bLon = position.coords.longitude;
		var r = 6372.795477598;
		var calc = Math.sin(aLat) * Math.sin(bLat) + Math.cos(aLat) * Math.cos(bLat) * Math.cos(aLon - bLon);
		calc = Math.acos(calc);
		calc = r * calc;
		calc = (calc * 3.1415926535) / 180;
		calc = calc.toFixed(2);
		stores[i].distanceGPS = calc;
	}

	stores.sort(function(a, b) {
		return a.distanceGPS - b.distanceGPS;
	});

	for (i = 0; i < stores.length; i++) {
		stores[i].distanceGPS = stores[i].distanceGPS + " km away";
	}

	fillText();
}

function fillText() {
	var i;
	for (i = 0; i < stores.length; i++) {
		document.getElementById("locationName_" + i).innerHTML = stores[i].name;
		document.getElementById("street_" + i).innerHTML = stores[i].address;
		document.getElementById("city_" + i).innerHTML = stores[i].city;
		document.getElementById("postcode_" + i).innerHTML = stores[i].postcode;
		document.getElementById("telephone_" + i).innerHTML = stores[i].telephone;
		document.getElementById("map_" + i).innerHTML = stores[i].map;
		document.getElementById("locationDistance_" + i).innerHTML = stores[i].distanceGPS;

		// Correct comparison operators for wifi and delivery
		document.getElementById("wifi_" + i).innerHTML = stores[i].wifi ? "Yes" : "No";
		document.getElementById("delivery_" + i).innerHTML = stores[i].delivery ? "Yes" : "No";

		document.getElementById("seat_" + i).innerHTML = stores[i].seat;

		fillStoreHours(i, 'monday');
		fillStoreHours(i, 'tuesday');
		fillStoreHours(i, 'wednesday');
		fillStoreHours(i, 'thursday');
		fillStoreHours(i, 'friday');
		fillStoreHours(i, 'saturday');
		fillStoreHours(i, 'sunday');
	}

	isOpen();
}

function fillStoreHours(i, day) {
	var x = stores[i][day][0];
	if (x === false) {
		document.getElementById(day + "_" + i).innerHTML = "Closed";
	} else {
		document.getElementById(day + "_" + i).innerHTML = stores[i][day][0] + " - " + stores[i][day][1];
	}
}

function isOpen() {
	var hour = new Date().getHours();
	var day = new Date().getDay();
	var i;
	for (i = 0; i < stores.length; i++) {
		var openNow = "Closed now";
		var storeDay = getDayName(day);
		if ((hour >= stores[i][storeDay][0]) && (hour < stores[i][storeDay][1])) {
			openNow = "Open now";
		}
		document.getElementById("openNow_" + i).innerHTML = openNow;
	}
}

function getDayName(day) {
	switch (day) {
		case 1: return 'monday';
		case 2: return 'tuesday';
		case 3: return 'wednesday';
		case 4: return 'thursday';
		case 5: return 'friday';
		case 6: return 'saturday';
		case 0: return 'sunday';  // Sunday as the last day of the week
		default: return 'monday'; // fallback
	}
}
