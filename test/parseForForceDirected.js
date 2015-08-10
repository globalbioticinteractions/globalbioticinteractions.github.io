var globi = require('../');
var transform = require('../node_modules/globi-force/lib/transform.js');
var test = require('tape');

test('single interaction two taxa', function (t) {
    t.plan(1);
    var someData = [
        {
            "source": {
                "id": "id1",
                "name": "name1",
                "path": "path1"
            },
            "target": {
                "id": "id2",
                "name": "name2",
                "path": "path2"
            },
            "type": "type1"
        }
    ];
    t.deepEqual(transform.parseInteractions(someData),
        {"nodes": [
            {"id": "id1", "name": "name1", "path": "path1", "index": 0},
            {"id": "id2", "name": "name2", "path": "path2", "index": 1}
        ], "links": [
            {"source": 0, "target": 1, "link_id": "id1---id2"}
        ]}

    );
});

test('single interaction two taxa, no path', function (t) {
    t.plan(1);
    var someData = [
        {
            "source": {
                "id": "id1",
                "name": "name1",
                "path": "path1"
            },
            "target": {
                "id": "id2",
                "name": "name2"
            },
            "type": "type1"
        }
    ];
    t.deepEqual(
        transform.parseInteractions(someData),
        {"nodes": [
            {"id": "id1", "name": "name1", "path": "path1", "index": 0},
            {"id": "id2", "name": "name2", "index": 1}
        ], "links": [
            {"source": 0, "target": 1, "link_id": "id1---id2"}
        ]}

    );
});

test('two interactions two unique taxa', function (t) {
    t.plan(1);
    var someData = [
        {
            "source": {
                "id": "id1",
                "name": "name1",
                "path": "path1"
            },
            "target": {
                "id": "id2",
                "name": "name2",
                "path": "path2"
            },
            "type": "type1"
        },
        {
            "source": {
                "id": "id1",
                "name": "name1",
                "path": "path1"
            },
            "target": {
                "id": "id2",
                "name": "name2",
                "path": "path2"
            },
            "type": "type1"
        }
    ];

    t.deepEqual(
        transform.parseInteractions(someData),
        {"nodes": [
            {"id": "id1", "name": "name1", "path": "path1", "index": 0},
            {"id": "id2", "name": "name2", "path": "path2", "index": 1}
        ], "links": [
            {"source": 0, "target": 1, "link_id": "id1---id2"}
        ]}

    );
});