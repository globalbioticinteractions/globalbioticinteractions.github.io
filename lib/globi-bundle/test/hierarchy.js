var transform = require('globi-bundle/lib/transform.js');
var test = require('tape');

test('hierarchy for two nodes', function (t) {
    t.plan(4);

    var someData = [
        {"name": "a.b.c.path1", "path": "a.b.c.path1", "eolId": "id1", "preys": ["path2"]},
        {"name": "a.b.c.path2", "path": "a.b.c.path2", "eolId": "id2", "preys": []}
    ];

    var actual = transform.taxonHierarchy(someData);

    t.equal(actual.name, "");
    t.equal(actual.children.length, 1);
    t.equal(actual.children[0].name, "a");
    t.equal(actual.children[0].children[0].name, "a.b");
});


