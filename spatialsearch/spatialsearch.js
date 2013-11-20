function initializeMap() {
    return new google.maps.Map( document.getElementById( 'map' ), {
        zoom: 2,
        center: new google.maps.LatLng( 0, 0 ),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    } );
}

function createLocationContent( location ) {
    return [
        '<div>',
            '<strong>Lat: </strong>' + location.latitude + '<br />',
            '<strong>Lng: </strong>' + location.longitude + '<br />',
            '<a href="#">',
                '<span>###count### specimens</span>',
            '</a>' + '<br />',
        '</div>'
    ].join( '' );
}

function placeMarker( content, location, map ) {
    var latLng = new google.maps.LatLng( location.latitude, location.longitude ),
        marker = new google.maps.Marker( { position: latLng, map: map } ),
        infoWindow = new google.maps.InfoWindow( { content: content } );

    google.maps.event.addListener( marker, 'click', function() {

        // @TODO: put this request to eol-globi-data-js and build an api call for only the count (it takes too long)

        jQuery.ajax( getSpecimensCountRequestObject( location ) )
            .done( function( response ) {
                if ( response.data ) {
                    infoWindow.content = infoWindow.content.replace( '###count###', response.data.length )
                    infoWindow.open( map, marker );
                }
            } );
    } );

    return marker;
}



function getSpecimensCountRequestObject( location ) {
    var url = 'http://trophicgraph.com:7474/db/data/cypher',
        query = [
            "START location=node:locations('*:*')",
            "MATCH location<-[:COLLECTED_AT]-specimen-[:CLASSIFIED_AS]->species",
            "WHERE location.latitude=" + location.latitude + " AND location.longitude=" + location.longitude + " RETURN specimen, species"
        ].join( ' ' );

    return {
        url: url,
        type: 'POST',
        data: { query: query }
    };
}