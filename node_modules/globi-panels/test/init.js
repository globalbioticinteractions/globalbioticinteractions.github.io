var panels = require('globi-panels');
var test = require('tape');


test('Pass Settings Into constructor', function(t) {
    t.plan(1);
    t.ok(panels({}))

});