var globi = require('../');
var transform = require('../node_modules/globi-bundle/transform.js');
var test = require('tape');

test('collect prey from nodes', function (t) {
    t.plan(5);

    var nodes = [
        {"name": "a.b.c.path1", "path": "a.b.c.path1", "eolId": "id1", "preys": ["a.b.c.path2"]},
        {"name": "a.b.c.path2", "path": "a.b.c.path2", "eolId": "id2", "preys": []}
    ];

    var prey = transform.taxonPreys(nodes);

    t.equal(prey.length, 1);
    t.equal(prey[0].source.name, "a.b.c.path1");
    t.equal(prey[0].source.preys.length, 1);
    t.equal(prey[0].target.name, "a.b.c.path2");
    t.equal(prey[0].target.preys.length, 0);
});


