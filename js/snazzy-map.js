    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(-33.7,-71.25),
            zoom: 8,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
    {
        "featureType": "poi",
        "stylers": [
            { "visibility": "off" }
        ]
    },{
        "stylers": [
            { "saturation": -70 },
            { "lightness": 37 },
            { "gamma": 1.15 }
        ]
    },{
        "elementType": "labels",
        "stylers": [
            { "gamma": 0.26 },
            { "visibility": "off" }
        ]
    },{
        "featureType": "road",
        "stylers": [
            { "lightness": 0 },
            { "saturation": 0 },
            { "hue": "#ffffff" },
            { "gamma": 0 }
        ]
    },{
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            { "visibility": "on" }
        ]
    },{
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            { "lightness": 20 }
        ]
    },{
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            { "lightness": 50 },
            { "saturation": 0 },
            { "hue": "#ffffff" }
        ]
    },{
        "featureType": "administrative.province",
        "stylers": [
            { "visibility": "on" },
            { "lightness": -50 }
        ]
    },{
        "featureType": "administrative.province",
        "elementType": "labels.text.stroke",
        "stylers": [
            { "visibility": "off" }
        ]
    },{
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [
            { "lightness": 20 }
        ]
    }
],
        }
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['Santuario Los Pinos', 'Villarrica 4, Viña del Mar, Concón, Valparaíso', 'undefined', '', '', -32.9542839, -71.5385, 'https://www.iconsdb.com/icons/download/color/00CC00/wedding-rings-32.png'],
['Nogaró', 'Av. Perú 100, Viña del Mar, Valparaíso', 'undefined', '', '', -33.01895,-71.5617, 'https://www.iconsdb.com/icons/download/soylent-red/restaurant-32.png'],
['Club Chocolate', 'Ernesto Pinto Lagarrigue 192, Recoleta, 8420492, Región Metropolitana', 'undefined', '', '', -33.4320,-70.6399, 'https://www.iconsdb.com/icons/download/orange/music-record-32.png'],
['Hotel Santa Teresita', 'Chillán 1195, San Fernando, O\'Higgins', 'http://www.hotelsantateresita.cl/', '', '', -34.5812,-70.9813, 'https://www.iconsdb.com/icons/download/barbie-pink/wine-glass-32.png'],
['Bravatta Italiana', 'Santiago 550, local 1, Valparaíso, Villa Alemana 6500000, Valparaíso', 'undefined', '', '', -33.0434241,-71.373783, 'https://www.iconsdb.com/icons/download/caribbean-blue/wine-bottle-32.png']
        ];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
            if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
            if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
 }   var waypts = [];
      directionsService = new google.maps.DirectionsService();
      directionsDisplay = new google.maps.DirectionsRenderer({
          suppressMarkers: true
      });
      if (locations.length > 1){
          for (var i = 0; i < locations.length; i++) {
              waypts.push({
                  location:new google.maps.LatLng(locations[i][5], locations[i][6]),
                  stopover:true
              });
          };
          var request = {
              origin: new google.maps.LatLng(locations[0][5], locations[0][6]),
              destination: new google.maps.LatLng(locations[locations.length - 1][5], locations[locations.length - 1][6]),
              waypoints: waypts,
              optimizeWaypoints: true,
              travelMode: google.maps.DirectionsTravelMode.DRIVING
          };
          directionsService.route(request, function(response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                  polylineOptions = {
                      strokeColor: '#808080',
                      strokeWeight: '1'
                  }
                  directionsDisplay.setOptions({
                      polylineOptions: polylineOptions
                  });
                  directionsDisplay.setDirections(response);
              }
          });
          directionsDisplay.setMap(map);
       }

}