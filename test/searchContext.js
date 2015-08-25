var searchContext = require('../lib/searchContext.js');
var assert = require('assert');
var test = require('tape');
var extend = require('extend');

test('create it', function (t) {
    t.plan(1);
    var context = searchContext({ sourceTaxa: ['bar']});
    t.deepEqual({
        interactionType: 'interactsWith',
        sourceTaxa: ['bar'],
        resultType: 'json'
    }, context.searchParameters, 'initialize search parameters');
});

['interactionType', 'bbox'].forEach(function (searchParameterName) {
    var initialSearchParameters = {
        interactionType: 'interactsWith',
        resultType: 'json'
    };
    initialSearchParameters[searchParameterName] = 'foo';

    test('Update search parameters with ' + searchParameterName, function (t) {
        t.plan(1);
        var context = searchContext();
        context.on('searchcontext:searchparameterchange', function (searchParameters) {
            t.deepEqual(searchParameters, initialSearchParameters, 'Update Search parameter ' + searchParameterName);
        });
        context.updateSearchParameter(searchParameterName, 'foo');
    });
});

['sourceTaxa'].forEach(function (searchParameterName) {
    var initialSearchParameters = {
        interactionType: 'interactsWith',
        resultType: 'json',
        sourceTaxa: ['foo']
    };
    initialSearchParameters[searchParameterName] = ['fooz'];

    test('Update search parameters with ' + searchParameterName, function (t) {
        t.plan(1);
        var context = searchContext();
        context.on('searchcontext:searchparameterchange', function (searchParameters) {
            t.deepEqual(searchParameters, initialSearchParameters, 'Update Search parameter ' + searchParameterName);
        });
        context.updateSearchParameter(searchParameterName, ['fooz']);
    });
});

['targetTaxon'].forEach(function (searchParameterName) {
    var initialSearchParameters = {
        interactionType: 'interactsWith',
        resultType: 'json',
        targetTaxon: ['foo']
    };
    initialSearchParameters[searchParameterName] = 'foo';

    test('Update search parameters with ' + searchParameterName, function (t) {
        t.plan(1);
        var context = searchContext();
        context.on('searchcontext:searchparameterchange', function (searchParameters) {
            t.deepEqual(searchParameters, initialSearchParameters, 'Update Search parameter ' + searchParameterName);
        });
        context.updateSearchParameter(searchParameterName, 'foo');
    });
});

test('Update more than one search parameter', function (t) {
    t.plan(1);
    var firstRun = true;
    var context = searchContext();
    context.on('searchcontext:searchparameterchange', function (searchParameters) {
        if (firstRun) {
            firstRun = false;
            context.updateSearchParameter('sourceTaxa', ['bar']);
        } else {
            t.deepEqual(searchParameters, {
                interactionType: 'foo',
                resultType: 'json',
                sourceTaxa: ['bar']
            }, 'Update a second parameter');
        }
    });
    context.updateSearchParameter('interactionType', 'foo');
});

test('unset search parameter', function (t) {
    t.plan(1);
    var context = searchContext({ sourceTaxa: ['bar']});
    context.on('searchcontext:searchparameterchange', function (searchParameters) {
        t.deepEqual(searchParameters, {
            resultType: 'json',
            sourceTaxa: ['bar']
        }, 'remove a parameter');
    });
    context.updateSearchParameter('interactionType', null);
});

test('update search search parameter change only', function (t) {
    t.plan(1);
    var context = searchContext({ sourceTaxa: ['bar']});
    context.on('searchcontext:searchparameterchange', function (searchParameters) {
        t.notOk('searchParameters');
    });
    context.updateSearchParameter('sourceTaxa', ['bar']);
    t.ok(context.searchParameters.sourceTaxa)
});

test('update search context change only', function (t) {
    t.plan(1);
    var context = searchContext({ sourceTaxa: ['bar']});
    context.on('searchcontext:searchparameterchange', function (searchParameters) {
        t.notOk('searchParameters');
    });
    context.update({sourceTaxa: ['bar']});
    t.ok(context.searchParameters.sourceTaxa)
});
