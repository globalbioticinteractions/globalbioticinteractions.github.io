function initializeMap( location, zoom ) {
    location = location || { latitude: 0, longitude: 0 };
    zoom = zoom || 1;
    return new google.maps.Map( document.getElementById( 'map' ), {
        zoom: zoom,
        center: new google.maps.LatLng( location.latitude, location.longitude ),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    } );
}

function initializeMarkerClusterer( map, markers ) {
    return new MarkerClusterer( map, markers, { gridSize: 40, maxZoom: 0 } );
}

function createLocationContent( location ) {
    return [
        '<div>',
            '<strong>Lat: </strong>' + location.latitude + '<br />',
            '<strong>Lng: </strong>' + location.longitude + '<br />',
            '<a href="location.html?lat=' + location.latitude + '&lng=' + location.longitude + '">',
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

        jQuery.ajax( getSpecimensRequestObject( location ) )
            .done( function( response ) {
                if ( response.data ) {
                    infoWindow.content = infoWindow.content.replace( '###count###', response.data.length )
                    infoWindow.open( map, marker );
                }
            } );
    } );

    return marker;
}

function getSpecimensRequestObject( location ) {
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


function generateSpecimensList( location ) {
    var specimens = [], specimen;
    jQuery.ajax( getSpecimensRequestObject( location ) )
        .done( function( response ) {
            if ( response.data ) {
                for ( var index in response.data ) {
                    if ( response.data.hasOwnProperty( index ) ) {
                        specimen = {
                            latitude: location.latitude,
                            longitude: location.longitude,
                            species: response.data[ index ][ 1 ].data.name,
                            externalId: response.data[ index ][ 1 ].data.externalId,
                            thumbnailUrl: response.data[ index ][ 1 ].data.thumbnail
                        };
                        specimen.taxonUri = createTaxonUrl( specimen );
                        specimens.push( specimen );
                    }
                }

                showSpecimensList( specimens );
            }
        } );
}

function showSpecimensList( specimens ) {
    var $contentNode = jQuery( '#spatialsearch-location #content' ), itemHtml;

    jQuery( '<div style="text-align:left; font-weight: bold;">' + specimens.length +  ' Specimen' + ( specimens.length > 1 ? 's' : '' ) + '</div>' ).appendTo( $contentNode );

    for ( var i = 0, specimen; specimen = specimens[ i ]; i++ ) {
        itemHtml = '<div class="result_list_item row" >';

        if ( specimen.thumbnailUrl ) {
            itemHtml += [
                '<div id="' + specimen.externalId + '" class="span1">',
                    '<img src="' + specimen.thumbnailUrl + '" /><br/>',
                '</div>'
            ].join( '' );
        }
        else {
            itemHtml += '<div id="' + specimen.externalId + ':' + i + '" class="span1"></div>';
        }
        itemHtml += '</div>';

        itemHtml += [
            '<div class="span5">',
            '<a href="' + specimen.taxonUri + '" target="_NEW_EOL">' + specimen.species + '</a>',
//                <% if specimen.length_in_mm %>
//                / <span>Length:</span> <%= specimen.length_in_mm %> mm <br/>
//                    <% end %>
            '</div>'
        ].join( '' )

        jQuery( itemHtml ).appendTo( $contentNode );
    }
}

function createTaxonUrl( specimen ) {
    var externalId = specimen.externalId, taxonUrl;
    if ( externalId ) {
        if ( externalId.indexOf( 'NCBI' ) === 0 ) {
            taxonUrl = 'http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=' + externalId.split( ':' )[ 1 ];
        }
        else if ( externalId.indexOf( 'EOL' ) === 0 ) {
            taxonUrl = 'http://www.eol.org/pages/' + externalId.split( ':' )[ 1 ];
        }
        else if ( externalId.indexOf( 'urn:lsid:marinespecies.org:taxname' ) === 0 ) {
            taxonUrl = 'http://www.marinespecies.org/aphia.php?p=taxdetails&id=' + externalId.split( ':' )[ 4 ];
        }
        else if ( externalId.indexOf( 'urn:lsid:itis.gov:itis_tsn' ) === 0 ) {
            taxonUrl = 'http://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=' + externalId.split( ':' )[ 4 ];
        }
    }
    else {
        taxonUrl = 'http://www.wikipedia.org/wiki/' + specimen.species.split( ' ' )[ 0 ];
    }
    return taxonUrl;
}



function getUrlParameters() {
    var query = window.location.search.substring( 1 ),
        vars = query.split( "&" ),
        hash = [];
    for ( var i=0; i < vars.length; i++ ) {
        var pair = vars[ i ].split( "=" );
        hash[ pair[ 0 ] ] = pair[ 1 ]
    }
    return hash;
}