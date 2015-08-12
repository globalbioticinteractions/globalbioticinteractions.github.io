var panels = require('globi-panels');
var test = require('tape');

test('check append panel to body single interaction', function (t) {
    t.plan(13);
    var preTestLength = document.body.children.length;
    t.notOk(document.querySelector('#panels'));
    var w = panels({});
    t.deepEqual(w.opts, {});
    w.on('append', function (target) {
        t.equal(target, document.body);
        t.equal(preTestLength + 1, document.body.children.length);
    });
    w.appendTo(document.body);
    t.ok(document.querySelector('#panels'));
    t.ok(document.querySelector(w.topLeft));
    t.ok(document.querySelector(w.topLeftContainer));
    t.ok(document.querySelector(w.topRight));
    t.ok(document.querySelector(w.topRightContainer));
    t.ok(document.querySelector(w.bottomLeft));
    t.ok(document.querySelector(w.bottomLeftContainer));
    t.ok(document.querySelector(w.bottomRight));
    t.ok(document.querySelector(w.bottomRightContainer));
});