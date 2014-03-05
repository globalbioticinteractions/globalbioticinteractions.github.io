( function( $, pub ) {
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
var canvasWidth = 2560, canvasHeight = 700;

var tree = d3.layout.tree().size( [ canvasHeight, canvasWidth ]);

var diagonal = d3.svg.diagonal()
    .projection( function( d ) { return [ d.y, d.x ]; } );

var nodeCache = {
    source: {},
    target: {}
};

var linkCache = [];

var _buildTree = function( json ) {
    var rootSource, rootTarget, nodeId = 0;
    var drawingArea = d3.select( '#tree-container' ).append( 'svg:svg' )
                .attr( 'width', canvasWidth )
                .attr( 'height', canvasHeight );
    drawingArea.append( 'svg:g' )
        .attr( 'transform', 'translate(60, 0)' );



    linkCache = parseToLinks( json );
    rootSource = parseToStructure( json );

    rootSource.x0 = 350;
    rootSource.y0 = 50;

    function toggleAll( d ) {
        if ( d.children ) {
            d.children.forEach( toggleAll );
            toggle( d );
        }
    }
    rootSource.children.forEach( toggleAll );

    update( rootSource, 'source' );


    function update( source, type ) {
        var duration = 500, nodes;

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
                    d.y = 70 + d.depth * 150;
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
                            .attr( 'transform', function( d ) { return 'translate(' + d.y + ',' + d.x + ')'; } );

        updateNode.select( 'circle' )
            .attr( 'r', 4.5 )
            .style( 'fill', function( d ) { return d._children ? 'darkseagreen' : '#fff'; } );

        updateNode.select( 'text' )
            .style( 'fill-opacity', 1 );

        var exitNode = node.exit().transition()
                        .duration( duration)
                        .attr( 'transform', function( d ) { d.x = source.x; d.y = source.y; return 'translate(' + source.y + ',' + source.x + ')' } );
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
    }
};
pub.buildTree = _buildTree;
} )( jQuery, window );
//
//jQuery( function() {
//    buildTree( 'http://trophicgraph.com:8080/interaction?type=json.v2&nw_lat=9.882275090474488&nw_lng=-82.64282299999996&se_lat=-24.307052858245683&se_lng=-10.682372999999984' );
//} );

//http://trophicgraph.com:8080/interaction?type=json.v2&nw_lat=9.882275090474488&nw_lng=-82.64282299999996&se_lat=-24.307052858245683&se_lng=-10.682372999999984
// http://trophicgraph.com:8080/interaction?type=json.v2&nw_lat=19.311142969053392&nw_lng=-67.48169018749996&se_lat=17.39257971605542&se_lng=-65.19653315624998