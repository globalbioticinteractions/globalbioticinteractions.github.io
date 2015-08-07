var transform = {};

parseToStructure = function (data) {
    var parsedData = {};
    var returnData = [];
    var path;
    data.forEach(function (d) {
        function addNode(source) {
            if (source.id && source.id !== 'no:match' && source.path !== undefined && !parsedData[ source.id ]) {
                path = source.path.split(' | ').join('.');
                parsedData[ source.id ] = { name: path, path: path, eolId: source.id, preys: [] };
            }
        }

        function linkNodes(source, target) {
            if (parsedData[ source.id ] && target.id !== 'no:match' && target.path !== undefined) {
                path = target.path.split(' | ').join('.');
                parsedData[ source.id ].preys.push(path);
            }
        }

        addNode(d.source);
        addNode(d.target);
        linkNodes(d.source, d.target);
    });

    for (var id in parsedData) {
        if (parsedData.hasOwnProperty(id)) {
            returnData.push(parsedData[ id ]);
        }
    }

    return returnData;
};

function taxonHierarchy(classes) {
    var map = {};
    var j = 0;

    function find(name, data) {
        var node = map[name], i;
        if (!node) {
            node = map[name] = data || {name: name, children: []};

            if (name.length) {
                node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
                if (!node.parent.children) {
                    node.parent.children = [];
                }
                node.parent.children.push(node);
                node.key = name.substring(i + 1);
            }
        }
        return node;
    }

    classes.forEach(function (d) {
        find(d.name, d);
    });
    return map[""];
}

// to enable testing testling/npm framework without converting all to npm module
if (typeof module !== 'undefined') {
    transform.parseToStructure = parseToStructure;
    transform.taxonHierarchy = taxonHierarchy;
    module.exports = transform;
}