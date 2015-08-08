var GloBIBundle = require('globi-bundle');
var test = require('tape');

test('check append to body single interaction', function (t) {
    t.plan(4);
    t.notOk(document.querySelector(".bundle-node"));
    var data = [ { source: { name: "taxon1", path: "taxonpath1", id: "id1" },
        type: 'preysOn',
        target: { name: 'taxon1', path: 'taxonpath1', id: 'id2'}}];

    var w = GloBIBundle({ json: data, canvasDimension: { height: 123, width: 1234}});
    t.equal(w.opts.canvasDimension.height, 123);
    w.on('append', function (target) {
        t.equal(target, document.body);
        t.ok(document.querySelector(".bundle-node"));
    });
    w.appendTo(document.body);
});

test('check append to body no data', function (t) {
    t.plan(2);
    var w = GloBIBundle({ json: [], canvasDimension: { height: 123, width: 1234}});
    t.equal(w.opts.canvasDimension.height, 123);
    w.on('append', function (target) {
        t.equal(target, document.body);
    });
    w.appendTo(document.body);
});
