var searchContext = require('../lib/searchContext.js');
var test = require('tape');

test('create it', function (t) {
    t.plan(5);
    var context = searchContext({ foo: 'bar'});
    t.ok(context);
    t.deepEqual({ bbox: '-125.53,32.75,-114.74,41.57', foo: 'bar'}, context.context);
    context.update({ foo: 'baz'});
    t.deepEqual({ bbox: '-125.53,32.75,-114.74,41.57', foo: 'baz'}, context.context);
    context.on('change', function(context) {
        t.deepEqual({ bbox: '-125.53,32.75,-114.74,41.57', foo: 'baz', fooz: 'barz'}, context);
    });
    context.update({ fooz: 'barz'});
    t.deepEqual({ bbox: '-125.53,32.75,-114.74,41.57', foo: 'baz', fooz: 'barz'}, context.context);
});