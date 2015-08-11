var hairball = require('globi-hairball');
var test = require('tape');

test('check append hairball to body single interaction', function (t) {
    t.plan(4);
    var preTestLength = document.body.children.length;
    t.notOk(document.querySelector('.dependencyWheel'));
    var data = [ { source: { name: 'taxon1', path: 'taxonpath1', id: 'id1' },
        type: 'preysOn',
        target: { name: 'taxon1', path: 'taxonpath1', id: 'id2'}}];

    var w = hairball({ json: data, canvasDimension: { height: 3000, width: 1234}});
    t.equal(w.opts.canvasDimension.height, 3000);
    w.on('append', function (target) {
        t.equal(target, document.body);
        t.ok(preTestLength < document.body.children.length);
    });
    w.appendTo(document.body);
});

test('check append hairball to body no data', function (t) {
    t.plan(2);
    var w = hairball({ json: [], canvasDimension: { height: 123, width: 1234}});
    t.equal(w.opts.canvasDimension.height, 123);
    w.on('append', function (target) {
        t.equal(target, document.body);
    });
    w.appendTo(document.body);
});
