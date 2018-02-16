var test = require('tape');
var SearchResult = require('../lib/SearchResult');

test('Initializing plain', function(t) {
    t.plan(3);

    var s1 = SearchResult();
    var s2 = new SearchResult();
    t.ok(s1 instanceof SearchResult, 'Function call');
    t.ok(s2 instanceof SearchResult, 'Using "new"');
    t.ok(s2.searchContext, 'SearchContext ad default DI');
    t.end();
});

test('Settings initialization', function(t) {
    t.plan(1);

    var s = SearchResult({ foo: 'bar' });
    t.equal('bar', s['settings']['foo'], 'Function call');
    t.end();
});

test('Statistics', function(t) {
    t.plan(3);

    var s = SearchResult();

    s.stat({
        source: {
            id: 'foo'
        },
        target: {
            id: 'bar'
        },
        link: {
            id: 'baz'
        }
    });

    t.deepEqual(s.statistics, {
        interactions: ['foo---baz---bar'],
        sources: ['foo'],
        targets: ['bar']
    });

    t.notOk(s.stat({
        source: {
            id: 'foo'
        },
        target: {
            id: 'bar'
        },
        link: {
            id: 'baz'
        }
    }), 'false for doublettes');

    s.stat({
        source: {
            id: 'foo1'
        },
        target: {
            id: 'bar'
        },
        link: {
            id: 'baz2'
        }
    });

    t.deepEqual(s.statistics, {
        interactions: ['foo---baz---bar', 'foo1---baz2---bar'],
        sources: ['foo', 'foo1'],
        targets: ['bar']
    });

    t.end();
});