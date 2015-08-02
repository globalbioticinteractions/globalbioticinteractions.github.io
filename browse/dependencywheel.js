( function( $, pub ) {
var chart;
var convertJsonForDependencyWheel = function( json ) {
    var taxonNames = {}, j, i = 0, matrix = [], row, column, tempNames = [];
    json.forEach( function( d ) {
        if ( ( d[ 'source' ][ 'id' ] !== 'no:match' ) && d[ 'target' ][ 'id' ] !== 'no:match' ) {
            if ( typeof taxonNames[ d[ 'source' ][ 'id' ] ] === 'undefined' ) {
                taxonNames[ d[ 'source' ][ 'id' ] ] = {
                    name: d[ 'source' ][ 'name' ],
                    index: i++
                };
                tempNames[ i - 1 ] = {
                    id: d[ 'source' ][ 'id' ].replace(':', '_'),
                    name: d[ 'source' ][ 'name' ],
                    index: i - 1
                };
            }
            if ( typeof taxonNames[ d[ 'target' ][ 'id' ] ] === 'undefined' ) {
                taxonNames[ d[ 'target' ][ 'id' ] ] = {
                    name: d[ 'target' ][ 'name' ],
                    index: i++
                };
                tempNames[ i - 1 ] = {
                    id: d[ 'target' ][ 'id' ].replace(':', '_'),
                    name: d[ 'target' ][ 'name' ],
                    index: i - 1
                };
            }
        }
    } );

    var arrayTemplate = [], tempArray = [];
    for ( j = 0; j < i; j++ ) {
        arrayTemplate.push( 0 );
    }
    for ( j = 0; j < i; j++ ) {
        tempArray.push( arrayTemplate.slice( 0 ) );
    }

    matrix = tempArray;

    json.forEach( function( d ) {
        if ( ( d[ 'source' ][ 'id' ] !== 'no:match' ) && d[ 'target' ][ 'id' ] !== 'no:match' ) {
            if ( d.source.name !== 'no:match' ) {

                row = taxonNames[ d.source.id ].index;
                column = taxonNames[ d.target.id ].index;

                matrix[ row ][ column ] = 1;
            }
        }
    } );

    return {
        names: tempNames,
        matrix: matrix
    };
};

var _buildDependencyWheel = function( json, canvasDimension ) {
    chart = d3.chart.dependencyWheel()
        .width( canvasDimension.width )
        .height( canvasDimension.height );

    var data = convertJsonForDependencyWheel(json);

    d3.select('#dependency-wheel-container')
        .datum(data)
        .call(chart);
};

    var highlightDWPath = function(path) {
        if (!path || !path['link_id']) {
            return;
        }
        var nodes = path['link_id'].split('---');
        var sourceNode = chart.dataMap().filter(function(value) {
            return value['id'] === nodes[0];
        });

        chart.fade(0.1, sourceNode[0]);
    };

    pub.buildDependencyWheel = _buildDependencyWheel;
    pub.highlightDW = highlightDWPath;
} )( jQuery, window );