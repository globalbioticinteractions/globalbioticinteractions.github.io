( function( pub ) {
    var _buildBundles = function( json, canvasDimension ) {
        var diameter = canvasDimension.height * 2,
            radius = diameter / 2,
            innerRadius = radius - 120;

        var cluster = d3.layout.cluster()
            .size([360, innerRadius])
            .sort(function(a, b) { return d3.ascending(a.key, b.key); })
            .value(function(d) { return d.size; });

        var bundle = d3.layout.bundle();

        var line = d3.svg.line.radial()
            .interpolate("bundle")
            .tension(0.85)
            .radius(function(d) { return d.y; })
            .angle(function(d) { return d.x / 180 * Math.PI; });

        var svg = d3.select("#bundle-container").append("svg")
            .attr( 'width', canvasDimension.width * 2 )
            .attr( 'height', canvasDimension.height * 2 )
            .attr( 'viewBox', '0 0 ' + canvasDimension.width * 2 + ' ' + canvasDimension.height * 2 )
            .attr( 'zoomAndPan', 'magnify' )
            .append("g")
            .attr("transform", "translate(" + ( canvasDimension.width / 2 + 100 ) + "," + radius + ")");

        var link = svg.append("g").selectAll(".bundl-link"),
            node = svg.append("g").selectAll(".bundl-node");


            classes = parseToStructure( json );

            var nodes = cluster.nodes(taxonHierarchy(classes) ),
                links = taxonPreys(nodes);

            link = link
                .data(bundle(links))
                .enter().append("path")
                .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
                .attr("class", "bundl-link")
                .attr("d", line);

            node = node
                .data(nodes.filter(function(n) { return !n.children; }))
                .enter().append("text")
                .attr("class", "bundle-node")
                .attr("dx", function(d) { return d.x < 180 ? 8 : -8; })
                .attr("dy", ".31em")
                .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")" + (d.x < 180 ? "" : "rotate(180)"); })
                .style("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
                .style("cursor", "pointer")
                .text( function( d ) { return d.key.length > 20 ? d.key.substring( 0, 19 ) + '...' : d.key; } )
                .on("mouseover", mouseovered)
                .on("mouseout", mouseouted)
                .append("title").text( function( d ) { return d.eolId + ' ' + d.path} )
            ;

        function mouseovered(d) {
            node
                .each(function(n) { n.target = n.source = false; });

            link
                .classed("link--target", function(l) { return l.target === d; })
                .classed("link--source", function(l) { return l.source === d; })
                .filter(function(l) { return l.target === d || l.source === d; })
                .each(function() { this.parentNode.appendChild(this); });

            node
                .classed("node--target", function(n) { return n.target; })
                .classed("node--source", function(n) { return n.source; });
        }

        function mouseouted(d) {
            link
                .classed("link--target", false)
                .classed("link--source", false);

            node
                .classed("node--target", false)
                .classed("node--source", false);
        }

        // Return a list of preys for the given array of nodes.
        function taxonPreys(nodes) {
            var map = {},
                preys = [];

            // Compute a map from name to node.
            nodes.forEach(function(d) {
                map[d.name] = d;
            });
            // For each import, construct a link from the source to target node.
            nodes.forEach(function(d) {
                if (d.preys) d.preys.forEach(function(i) {
                    if ( map[ i ] ) {
                        preys.push({source: map[d.name], target: map[i]});
                    }
                });
            });
            return preys;
        }
    };

    pub.buildBundles = _buildBundles;
} )( window );
