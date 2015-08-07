var globi = require('../');
var transform = require('../browse/transform.js')
var test = require('tape');

test('my first test', function (t) {
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
    var expected = [{"name":"path1","path":"path1","eolId":"id1","preys":["path2"]},{"name":"path2","path":"path2","eolId":"id2","preys":[]}];
    t.deepEqual(transform.parseToStructure(someData), expected);
});