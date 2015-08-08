var GloBIBundle = require('globi-bundle');
var test = require('tape');

test('check append to body', function(t) {
    t.plan(4);
    t.notOk(document.querySelector(".name"));
    var w = GloBIBundle({ "some": "thing"});
    t.equal(w.opts.some, "thing");
    w.on('append', function (target) {
        t.equal(target, document.body);
        t.ok(document.querySelector(".name"));
    });
    w.appendTo(document.body);
});
