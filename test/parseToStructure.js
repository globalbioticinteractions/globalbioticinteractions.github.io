var globi = require('../');
var transform = require('../node_modules/globi-bundle/lib/transform.js');
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
    t.deepEqual(transform.parseToStructure(someData),
        [
            {"name": "path1", "path": "path1", "eolId": "id1", "preys": ["path2"]},
            {"name": "path2", "path": "path2", "eolId": "id2", "preys": []}
        ]
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
        transform.parseToStructure(someData),
        [
            {"name": "path1", "path": "path1", "eolId": "id1", "preys": []}
        ]
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
        transform.parseToStructure(someData),
        [
            {"name": "path1", "path": "path1", "eolId": "id1", "preys": ["path2", "path2"]},
            {"name": "path2", "path": "path2", "eolId": "id2", "preys": []}
        ]
    );
});