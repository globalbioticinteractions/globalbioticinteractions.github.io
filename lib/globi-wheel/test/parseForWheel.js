var transform = require('globi-wheel/lib/transform.js');
var test = require('tape');

test('single interaction two taxa for dependency wheel', function (t) {
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
    t.deepEqual(transform.convertJsonForDependencyWheel(someData),
        {"names": {"0": "name1", "1": "name2"},
            "matrix": [
                [0, 1],
                [0, 0]
            ]}
    );
});

test('two interactions four taxa for dependency wheel', function (t) {
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
                "id": "id3",
                "name": "name3",
                "path": "path3"
            },
            "target": {
                "id": "id4",
                "name": "name4",
                "path": "path4"
            },
            "type": "type2"
        }
    ];
    t.deepEqual(transform.convertJsonForDependencyWheel(someData),
        {"names":{"0":"name1","1":"name2","2":"name3","3":"name4"},"matrix":[[0,1,0,0],[0,0,0,0],[0,0,0,1],[0,0,0,0]]}
    );
});