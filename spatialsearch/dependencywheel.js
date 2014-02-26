var convertJsonForDependencyWheel = function( json ) {
    var taxonNames = {}, j, i = 0, matrix = [], row, column, tempNames = {};
    json.forEach( function( d ) {
        if ( ( d[ 'source' ][ 'id' ] !== 'no:match' ) && d[ 'target' ][ 'id' ] !== 'no:match' ) {
            if ( typeof taxonNames[ d[ 'source' ][ 'id' ] ] === 'undefined' ) {
                taxonNames[ d[ 'source' ][ 'id' ] ] = {
                    name: d[ 'source' ][ 'name' ],
                    index: i++
                };
                tempNames[ i - 1 ] = d[ 'source' ][ 'name' ];
            }
            if ( typeof taxonNames[ d[ 'target' ][ 'id' ] ] === 'undefined' ) {
                taxonNames[ d[ 'target' ][ 'id' ] ] = {
                    name: d[ 'target' ][ 'name' ],
                    index: i++
                };
                tempNames[ i - 1 ] = d[ 'target' ][ 'name' ];
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

