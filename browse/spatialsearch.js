var currentInfoWindow;

function initializeMap( target, location, zoom ) {
    location = location || { latitude: 0, longitude: 0 };
    zoom = zoom || 1;
    return new google.maps.Map( document.querySelector(target), {
        zoom: zoom,
        center: new google.maps.LatLng( location.latitude, location.longitude ),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    } );
}

function initializeMarkerClusterer( map, markers ) {
    return new MarkerClusterer( map, markers, { gridSize: 40, maxZoom: 0 } );
}

function createLocationContent( location ) {
    return locationInfoBox({location: {lng: location.longitude, lat: location.latitude }});
}

function placeMarker( content, location, map ) {
    var latLng = new google.maps.LatLng( location.latitude, location.longitude ),
        marker = new google.maps.Marker( { position: latLng, map: map } ),
    infoWindow = new google.maps.InfoWindow( { content: content, maxWidth: 200 } );

    google.maps.event.addListener( marker, 'click', function() {
        currentInfoWindow && currentInfoWindow.close();
        currentInfoWindow = infoWindow;
        currentInfoWindow.open( map, marker );
    } );

    return marker;
}

function getUrlParameters() {
    var query = window.location.search.substring( 1 ),
        vars = query.split( "&" ),
        hash = {};
    for ( var i=0; i < vars.length; i++ ) {
        var pair = vars[ i ].split( "=" );
        hash[ pair[ 0 ] ] = pair[ 1 ]
    }
    return hash;
}
