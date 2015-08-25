var dataContext = require('../lib/dataContext.js');
var assert = require('assert');
var test = require('tape');
var extend = require('extend');

test('plurify', function (t) {
    t.plan(2);
    var context = dataContext();
    var params = {one: 'one', two: 'two'};
    t.deepEqual({
        field: [ 'source_taxon_external_id', 'source_taxon_name', 'source_taxon_path', 'source_taxon_path_ids', 'target_taxon_external_id', 'target_taxon_name', 'target_taxon_path', 'target_taxon_path_ids', 'interaction_type' ],
        one: 'one',
        two: 'two' }, context.prepareParameters(params), 'initialize search parameters');

    t.notOk(params['field']);
});

test('plurify duplicate', function (t) {
    t.plan(2);
    var context = dataContext();
    var params = {sourceTaxon: ['one'], two: 'two'};
    t.deepEqual({
        field: [ 'source_taxon_external_id', 'source_taxon_name', 'source_taxon_path', 'source_taxon_path_ids', 'target_taxon_external_id', 'target_taxon_name', 'target_taxon_path', 'target_taxon_path_ids', 'interaction_type' ],
        sourceTaxon: ['one'],
        sourceTaxa: ['one'],
        two: 'two' }, context.prepareParameters(params), 'initialize pluralized search parameters');

    t.notOk(params['field']);
});

test('plurify override', function (t) {
    t.plan(2);
    var context = dataContext();
    var params = {sourceTaxon: ['one'], two: 'two', field: ['one_field']};
    t.deepEqual({
        field: [ 'one_field' ],
        sourceTaxon: ['one'],
        sourceTaxa: ['one'],
        two: 'two' }, context.prepareParameters(params), 'initialize pluralized search parameters');

    t.notOk(params['sourceTaxa']);
});

test('singular enrich with plural', function (t) {
    t.plan(2);
    var context = dataContext();
    var params = {sourceTaxon: 'one', two: 'two', field: ['one_field']};
    t.deepEqual(
        context.prepareParameters(params),
        {field: [ 'one_field' ],
            sourceTaxon: 'one',
            sourceTaxa: ['one'],
            two: 'two' },
        'convert singular params');

    t.notOk(params['sourceTaxa']);
});