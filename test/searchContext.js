var searchContext = require('../lib/searchContext.js');
var assert = require('assert');
var test = require('tape');
var extend = require('extend');
var interactionTypeStartValue = require('../lib/settings').InteractionTypeAtStart;

var INITIAL_BBOX = '';

test('create it', function (t) {
    t.plan(6);
    var context = searchContext({ foo: 'bar'});
    t.ok(context);
    t.deepEqual({ bbox: INITIAL_BBOX, foo: 'bar'}, context.context);
    t.deepEqual({
        'interactionType': interactionTypeStartValue,
        'sourceTaxon': null,
        'targetTaxon': null,
        'bbox': INITIAL_BBOX
    }, context.searchParameters, 'initialize search parameters');
    context.update({ foo: 'baz'});
    t.deepEqual({ bbox: INITIAL_BBOX, foo: 'baz'}, context.context);
    context.on('change', function(context) {
        t.deepEqual({ bbox: INITIAL_BBOX, foo: 'baz', fooz: 'barz'}, context);
    });
    context.update({ fooz: 'barz'});
    t.deepEqual({ bbox: INITIAL_BBOX, foo: 'baz', fooz: 'barz'}, context.context);
});

test('Update search parameters with unknown search parameter', function(t){
    t.plan(1);
    var context = searchContext();
    t.throws(function() {
        context.updateSearchParameter('unknownParameterName', 'foo');
    }, new assert.AssertionError({}), 'Throws error');
    t.end();
});


['interactionType', 'bbox'].forEach(function(searchParameterName) {
    var initialSearchParameters = {
        'interactionType': interactionTypeStartValue,
        'resultType': 'json',
        'sourceTaxa': null,
        'sourceTaxon': null,
        'targetTaxa': null,
        'targetTaxon': null,
        'bbox': INITIAL_BBOX
    };
    initialSearchParameters[searchParameterName] = 'foo';

    test('Update search parameters with ' + searchParameterName, function(t){
        t.plan(1);
        var context = searchContext();
        context.on('searchcontext:searchparameterchange', function(searchParameters) {
            t.deepEqual(initialSearchParameters, searchParameters, 'Update Search parameter ' + searchParameterName);
        });
        context.updateSearchParameter(searchParameterName, 'foo');
    });
});

['sourceTaxon'].forEach(function(searchParameterName) {
    var initialSearchParameters = {
        'interactionType': interactionTypeStartValue,
        'resultType': 'json',
        'sourceTaxa': ['foo'],
        'sourceTaxon': null,
        'targetTaxa': null,
        'targetTaxon': null,
        'bbox': INITIAL_BBOX
    };
    initialSearchParameters[searchParameterName] = 'foo';

    test('Update search parameters with ' + searchParameterName, function(t){
        t.plan(1);
        var context = searchContext();
        context.on('searchcontext:searchparameterchange', function(searchParameters) {
            t.deepEqual(initialSearchParameters, searchParameters, 'Update Search parameter ' + searchParameterName);
        });
        context.updateSearchParameter(searchParameterName, 'foo');
    });
});

['targetTaxon'].forEach(function(searchParameterName) {
    var initialSearchParameters = {
        'interactionType': interactionTypeStartValue,
        'resultType': 'json',
        'sourceTaxa': null,
        'sourceTaxon': null,
        'targetTaxa': ['foo'],
        'targetTaxon': null,
        'bbox': INITIAL_BBOX
    };
    initialSearchParameters[searchParameterName] = 'foo';

    test('Update search parameters with ' + searchParameterName, function(t){
        t.plan(1);
        var context = searchContext();
        context.on('searchcontext:searchparameterchange', function(searchParameters) {
            t.deepEqual(initialSearchParameters, searchParameters, 'Update Search parameter ' + searchParameterName);
        });
        context.updateSearchParameter(searchParameterName, 'foo');
    });
});

test('Update more than one search parameter', function(t){
    t.plan(1);
    var firstRun = true;
    var context = searchContext();
    context.on('searchcontext:searchparameterchange', function(searchParameters) {
        if (firstRun) {
            firstRun = false;
            context.updateSearchParameter('sourceTaxon', 'bar');
        } else {
            t.deepEqual({
                'interactionType': 'foo',
                'resultType': 'json',
                'sourceTaxon': 'bar',
                'sourceTaxa': ['bar'],
                'targetTaxon': null,
                'targetTaxa': null,
                'bbox': INITIAL_BBOX
            }, searchParameters, 'Update a second parameter');
        }
    });
    context.updateSearchParameter('interactionType', 'foo');
});
