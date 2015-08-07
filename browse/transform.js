var transform = {};

parseToStructure = function( data ) {
    var parsedData = {}, currentSource, currentTarget, returnData = [], path;
    data.forEach( function( d ) {
        currentSource = d.source; currentTarget = d.target;

        if ( currentSource.id && currentSource.id !== 'no:match' && currentSource.path !== undefined && !parsedData[ currentSource.id ] ) {
            path = currentSource.path.split( ' | ' ).join( '.' );
            parsedData[ currentSource.id ] = { name: path, path: path, eolId: currentSource.id, preys: [] };
        }

        if ( parsedData[ currentSource.id ] && currentTarget.id !== 'no:match' && currentTarget.path !== undefined ) {
            path = currentTarget.path.split( ' | ' ).join( '.' );
            parsedData[ currentSource.id ].preys.push( path );
        }

        if ( currentTarget.id && currentTarget.id !== 'no:match' && currentTarget.path !== undefined && !parsedData[ currentTarget.id ] ) {
            path = currentTarget.path.split( ' | ' ).join( '.' );
            parsedData[ currentTarget.id ] = { name: path, path: path, eolId: currentTarget.id, preys: [] };
        }
    } );

    for ( var id in parsedData ) {
        if ( parsedData.hasOwnProperty( id ) ) {
            returnData.push( parsedData[ id ] );
        }
    }

    return returnData;
};

// to enable testing testling/npm framework without converting all to npm module
if (typeof variable !== 'undefined') {
    transform.parseToStructure = parseToStructure;
    module.exports = transform;
}