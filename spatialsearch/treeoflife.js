var parseToStructure = function( rawData ) {
    var source, sourcePath, sourcePathLength,
        structureObject = { name: 'tree of life', children: [] }, structureStepper,
        stepperStart,
        j, l, part, stepFound, stepIndex, temp;

    structureStepper = structureObject.children;
    stepperStart = structureObject.children;

    for ( var i = 0, rawDatum; rawDatum = rawData[ i ]; i++ ) {

        for ( var fieldIndex = 0, fields = [ 'source', 'target' ]; fieldIndex < fields.length; fieldIndex++ ) {
            source = rawDatum[ fields[ fieldIndex ] ];

            if ( source[ 'id' ] !== 'no:match' ) {
                sourcePath = source[ 'path' ].split( ' | ' );
                sourcePathLength = sourcePath.length;

                for ( j = 0; j < sourcePathLength; j++ ) {
                    part = sourcePath[ j ];

                    stepFound = false;
                    for ( l = 0; l < structureStepper.length; l++ ) {
                        if ( structureStepper[ l ][ 'name' ] === part ) {
                            stepFound = true;
                            stepIndex = l;
                            break;
                        }
                    }

                    if ( !stepFound ) {
                        temp = { name: part, children: [] };
                        if ( j == ( sourcePathLength - 1 ) ) {
                            temp.eol_id = source[ 'id' ];
                        }

                        structureStepper.push( temp );
                        structureStepper = temp.children;
                    }
                    else {
                        structureStepper = structureStepper[ stepIndex ][ 'children' ];
                    }
                }

                structureStepper = stepperStart;
            }

        }

    }

    return structureObject;
};

var parseToLinks = function( rawData ) {
    var links = [];
    for ( var i = 0, rawDatum; rawDatum = rawData[ i ]; i++ ) {
        if ( rawDatum[ 'source' ] && rawDatum[ 'source' ][ 'id' ] && rawDatum[ 'source' ][ 'id' ] !== 'no:match'
            && rawDatum[ 'target' ] && rawDatum[ 'target' ][ 'id' ] && rawDatum[ 'target' ][ 'id' ] !== 'no:match'
            ) {
            links.push( { source: rawDatum[ 'source' ][ 'id' ], target: rawDatum[ 'target' ][ 'id' ] } )
        }
    }
    return links;
};
var canvasWidth = 2560;

var tree = d3.layout.tree().size( [ 700, canvasWidth ]);

var diagonal = d3.svg.diagonal()
    .projection( function( d ) { return [ d.y, d.x ]; } );

var nodeCache = {
    source: {},
    target: {}
};


var firstStep = true;
var linkCache = [], interLinks = null;

jQuery( function() {

    var rootSource, rootTarget, nodeId = 0;
    var drawingArea = d3.select( '#tree-container' ).append( 'svg:svg' )
                .attr( 'width', canvasWidth )
                .attr( 'height', 700 );
    drawingArea.append( 'svg:g' )
        .attr( 'transform', 'translate(60, 0)' );
    drawingArea.append( 'svg:g' )
        .attr( 'transform', 'translate(60, 0)' );

    d3.json( 'testinteraction.json', function( json ) {
        linkCache = parseToLinks( json );
        rootSource = parseToStructure( json );

        rootSource.x0 = 350;
        rootSource.y0 = 0;

//        rootTarget = parseToStructure( json );
//        rootTarget.x0 = 350;
//        rootTarget.y0 = 0;

        function toggleAll( d ) {
            if ( d.children ) {
                d.children.forEach( toggleAll );
                toggle( d );
            }
        }

//        rootTarget.children.forEach( toggleAll );
        rootSource.children.forEach( toggleAll );


        update( rootSource, 'source' );

//        firstStep = false;
//        update( rootTarget, 'target' );

    } );

    function update( source, type ) {
        var duration = 500, nodes;

        console.log( source );

        switch ( type ) {
            case 'target':
                nodes = tree.nodes( rootTarget ).reverse();
                break;
            case 'source':
                nodes = tree.nodes( rootSource ).reverse();
                break;
        }

        nodes.forEach( function( d ) {

            switch ( type ) {
                case 'target':
                    d.y = canvasWidth - ( d.depth + 1 ) * 150;
                    break;
                case 'source':
                    d.y = d.depth * 150;
                    break;
            }

            // Remove children property for leafes
            if ( d._children && d._children.length === 0 ) {
                delete d._children;
                delete d.children;
            }
        } );

        var node = drawingArea.selectAll( 'g.node.' + type )
                    .data( nodes, function( d ) { return d.id || ( d.id = ++nodeId ); } );

        var newNode = node.enter().append( 'svg:g' )
                        .attr( 'class', 'node ' + type )
                        .attr( 'id', function( d ) { return d.id; } )
                        .attr( 'data-eol-id', function( d ) { if ( d.eol_id ) { nodeCache[ type ][ d.eol_id ] = d; } return d.eol_id } )
                        .attr( 'transform', function( d ) { return 'translate(' + source.y0 + ',' + source.x0 + ')'; } )
                        .on( 'click', function( d ) { toggle( d ); update( d, type ) } );

        newNode.append( 'svg:circle' )
                .attr( 'r', 1e-6 )
                .style( 'fill', function( d ) { return d._children ? 'darkseagreen' : '#fff' } );

        newNode.append( 'svg:text' )
            .attr( 'x', function( d ) { return d.children || d._children ? -10 : 10; } )
            .attr( 'dy', '.35em' )
            .attr( 'text-anchor', function( d ) { return d.children || d._children ? 'end' : 'start'; } )
            .attr( 'font-family', 'Helvetica, "Helvetica Neue", Arial, sans-serif')
            .text( function( d ) { return d.name; } )
            .style( 'fill-opacity', 1e-6 );

        var updateNode = node.transition()
                            .duration( duration )
                            .attr( 'transform', function( d ) { d.name === 'Vireo altiloquus' ? console.log( 'u',d.x, d.y ) : '';return 'translate(' + d.y + ',' + d.x + ')'; } );

        updateNode.select( 'circle' )
            .attr( 'r', 4.5 )
            .style( 'fill', function( d ) { return d._children ? 'darkseagreen' : '#fff'; } );

        updateNode.select( 'text' )
            .style( 'fill-opacity', 1 );

        var exitNode = node.exit().transition()
                        .duration( duration)
                        .attr( 'transform', function( d ) { d.x = source.x; d.y = source.y; d.name === 'Vireo altiloquus' ? console.log( 'e', d.x, d.y ) : '';return 'translate(' + source.y + ',' + source.x + ')' } );
//                        .remove();

        exitNode.select( 'circle' )
                    .attr( 'r', 1e-6 );

        exitNode.select( 'text' )
            .style( 'fill-opacity', 1e-6 );

        var intraLink = drawingArea.selectAll( 'path.link.' + type )
                    .data( tree.links( nodes ), function( d ) { return d.target.id; } );

        intraLink.enter().insert( 'svg:path', 'g' )
            .attr( 'class', 'link ' + type )
            .attr( 'd', function( d ) {
                var o = { x: source.x0, y: source.y0 };
                return diagonal( { source: o, target: o } );
            } )
            .transition()
                .duration( duration )
                .attr( 'd', diagonal );

        intraLink.transition()
            .duration( duration )
            .attr( 'd', diagonal );

        intraLink.exit().transition()
            .duration( duration )
            .attr( 'd', function( d ) {
                var o = { x: source.x, y: source.y };
                return diagonal( { source: o, target: o } );
            } )
            .remove();

        nodes.forEach( function( d ) {
            d.x0 = d.x;
            d.y0 = d.y;
        } );

//        !firstStep && linkCache.forEach( function( cacheItem ) {
//            if ( interLinks !== null ) {
//                interLinks.remove();
//            }
//
//            interLinks = drawingArea.insert( 'svg:path', 'g' )
//                .attr( 'class', 'inter-link' )
//                .attr( 'd', function( d ) {
//                    var sourceNode = nodeCache[ 'source' ][ cacheItem[ 'source' ] ];
//                    var targetNode = nodeCache[ 'target' ][ cacheItem[ 'target' ] ];
//
//                    return diagonal( { source: sourceNode, target: targetNode } );
//                } );
//        } );
    }

    function toggle( d ) {
        if ( d.children ) {
            d._children = d.children;
            d.children = null;
        }
        else {
            d.children = d._children;
            d._children = null;
        }

        console.log( d );
    }
} );