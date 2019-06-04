

function getLocation() { /*fix the error handler*/
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        var i;
        for (i = 0; i < stores.length; i++) {
            stores[i].distanceGPS = "Geolocation is not supported by this browser.";
            document.getElementsById("locationDistance_" + i).style.fontSize = "small";
            document.getElementById("main").style.opacity = "1";
            document.getElementById("main_2").style.opacity = "1";
            document.getElementById("logo").style.animationPlayState="paused";
            document.getElementById("logo").style.display="none";
            fillText();
        }
    }
}
function showError(error) {
    document.getElementById("main").style.opacity = "1";
    document.getElementById("main_2").style.opacity = "1";
    document.getElementById("logo").style.animationPlayState="paused";
    document.getElementById("logo").style.display="none";
    var i;
    for (i = 0; i < stores.length; i++) {
        document.getElementById("locationDistance_" + i).style.fontSize = "small";
        switch (error.code) {
            case (error.PERMISSION_DENIED):
                stores[i].distanceGPS = "User denied the request for Geolocation.";
                fillText();
                break;
            case error.POSITION_UNAVAILABLE:
                stores[i].distanceGPS = "Location information is unavailable.";
                fillText();
                break;
            case error.TIMEOUT:
                stores[i].distanceGPS = "The request to get user location timed out.";
                fillText();
                break;
            case error.UNKNOWN_ERROR:
                stores[i].distanceGPS = "An unknown error occurred.";
                fillText();
                break;
        }
    }
}
/*La formula utilizzata per determinare la distanza più breve tra due punti terrestri (geodetica), approssima il geoide a una sfera di raggio R = 6372,795477598 Km (raggio quadrico medio), quindi il calcolo della distanza potrebbe avere un errore dello 0.3%, in particolare nelle estremitá polari, e per distanze lunghe che attraversano diversi paralleli. Dati due punti A e B sulla sfera espressi con la latitudine (lat) e longitudine (lon) si avrà:
distanza (A,B) = R * arccos(sin(latA) * sin(latB) + cos(latA) * cos(latB) * cos(lonA-lonB))        
Gli angoli utilizzati sono espressi in radianti, la conversione tra gradi e radianti si ottiene moltiplicando l’angolo per pi e dividendo per 180.*/
function showPosition(position) { /*this f calculate distance in km between actual position and shops position*/
    document.getElementById("main").style.opacity = "1";
    document.getElementById("main_2").style.opacity = "1";
    document.getElementById("logo").style.animationPlayState="paused";
    document.getElementById("logo").style.display="none";
    var i;
    for (i = 0; i < stores.length; i++) {
        var aLat;
        var aLon;
        aLat = stores[i].latitude;
        aLon = stores[i].longitude;
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
    stores.sort(function (a, b) {
        return a.distanceGPS - b.distanceGPS;
    });
    for (i = 0; i < stores.length; i++) {
        stores[i].distanceGPS = stores[i].distanceGPS + " km away";}
    fillText();
}


function fillText() {   /*this f get the info from array and fill the html page*/
    var i;
    for (i = 0; i < stores.length; i++) {
        document.getElementById("locationName_" + i).innerHTML = stores[i].name;
        document.getElementById("street_" + i).innerHTML = stores[i].address;
        document.getElementById("city_" + i).innerHTML = stores[i].city;
        document.getElementById("postcode_" + i).innerHTML = stores[i].postcode;
        document.getElementById("telephone_" + i).innerHTML = stores[i].telephone;
        document.getElementById("map_" + i).innerHTML = stores[i].map;
        document.getElementById("locationDistance_" + i).innerHTML = stores[i].distanceGPS;
        if (stores[i].wifi = true) {
            document.getElementById("wifi_" + i).innerHTML = "Yes";
        }
        else document.getElementById("wifi_" + i).innerHTML = "No";

        if (stores[i].delivery = true) {
            document.getElementById("delivery_" + i).innerHTML = "Yes";
        }
        else document.getElementById("delivery_" + i).innerHTML = "No";
        document.getElementById("seat_" + i).innerHTML = stores[i].seat;
        var x = stores[i].monday[0];
        if (x == false) {
            document.getElementById("monday_" + i).innerHTML = "Closed";
        } else {
            document.getElementById("monday_" + i).innerHTML = stores[i].monday[0] + " - " + stores[i].monday[1];
        }
        var x = stores[i].tuesday[0];
        if (x == false) {
            document.getElementById("tuesday_" + i).innerHTML = "Closed";
        } else {
            document.getElementById("tuesday_" + i).innerHTML = stores[i].tuesday[0] + " - " + stores[i].tuesday[1];
        }
        var x = stores[i].wednesday[0];
        if (x == false) {
            document.getElementById("wednesday_" + i).innerHTML = "Closed";
        } else {
            document.getElementById("wednesday_" + i).innerHTML = stores[i].wednesday[0] + " - " + stores[i].wednesday[1];
        }
        var x = stores[i].thursday[0];
        if (x == false) {
            document.getElementById("thursday_" + i).innerHTML = "Closed";
        } else {
            document.getElementById("thursday_" + i).innerHTML = stores[i].thursday[0] + " - " + stores[i].thursday[1];
        }
        var x = stores[i].friday[0];
        if (x == false) {
            document.getElementById("friday_" + i).innerHTML = "Closed";
        } else {
            document.getElementById("friday_" + i).innerHTML = stores[i].friday[0] + " - " + stores[i].friday[1];
        }
        var x = stores[i].saturday[0];
        if (x == false) {
            document.getElementById("saturday_" + i).innerHTML = "Closed";
        } else {
            document.getElementById("saturday_" + i).innerHTML = stores[i].saturday[0] + " - " + stores[i].saturday[1];
        }
        var x = stores[i].sunday[0];
        if (x == false) {
            document.getElementById("sunday_" + i).innerHTML = "Closed";
        } else {
            document.getElementById("sunday_" + i).innerHTML = stores[i].sunday[0] + " - " + stores[i].sunday[1];
        }
    }
    isOpen();          /*Check if store is open now*/
}

function isOpen() {/*this f check if each shop is open at time of browsing the page*/
    var hour = new Date().getHours();
    var day = new Date().getDay();
    var i;
    for (i = 0; i < stores.length; i++) {
        switch (day) {
            case 0:
                if ((hour => stores[i].sunday[0]) && (hour < stores[i].sunday[1])) {
                    document.getElementById("openNow_" + i).innerHTML = "Open now";

                }
                else {
                    document.getElementById("openNow_" + i).innerHTML = "Closed now";
                };
                break;

            case 1:
                if ((hour => stores[i].monday[0]) && (hour < stores[i].monday[1])) {
                    document.getElementById("openNow_" + i).innerHTML = "Open now";

                }
                else {
                    document.getElementById("openNow_" + i).innerHTML = "Closed now";
                };
                break;

            case 2:
                if ((hour => stores[i].tuesday[0]) && (hour < stores[i].tuesday[1])) {
                    document.getElementById("openNow_" + i).innerHTML = "Open now";

                }
                else {
                    document.getElementById("openNow_" + i).innerHTML = "Closed now";
                };
                break;

            case 3:
                if ((hour => stores[i].wednesday[0]) && (hour < stores[i].wednesday[1])) {
                    document.getElementById("openNow_" + i).innerHTML = "Open now";

                }
                else {
                    document.getElementById("openNow_" + i).innerHTML = "Closed now";
                };
                break;

            case 4:
                if ((hour => stores[i].thursday[0]) && (hour < stores[i].thursday[1])) {
                    document.getElementById("openNow_" + i).innerHTML = "Open now";

                }
                else {
                    document.getElementById("openNow_" + i).innerHTML = "Closed now";
                };
                break;

            case 5:
                if ((hour => stores[i].friday[0]) && (hour < stores[i].friday[1])) {
                    document.getElementById("openNow_" + i).innerHTML = "Open now";

                }
                else {
                    document.getElementById("openNow_" + i).innerHTML = "Closed now";
                };
                break;

            case 6:
                if ((hour => stores[i].saturday[0]) && (hour < stores[i].saturday[1])) {
                    document.getElementById("openNow_" + i).innerHTML = "Open now";

                }
                else {
                    document.getElementById("openNow_" + i).innerHTML = "Closed now";
                };
                break;
        }
    }
}