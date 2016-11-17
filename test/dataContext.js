var dataContext = require('../lib/dataContext.js');
var assert = require('assert');
var test = require('tape');
var extend = require('extend');

test('add fields', function (t) {
    t.plan(2);
    var context = dataContext();
    var params = {one: 'one', two: 'two'};
    t.deepEqual({
        field: [ 'source_taxon_external_id', 'source_taxon_name', 'source_taxon_path', 'source_taxon_path_ids', 'target_taxon_external_id', 'target_taxon_name', 'target_taxon_path', 'target_taxon_path_ids', 'interaction_type', 'number_of_interactions' ],
        one: 'one',
        two: 'two' }, context.prepareParameters(params), 'initialize search parameters');

    t.notOk(params['field']);
});

test('add fields and more', function (t) {
    t.plan(2);
    var context = dataContext();
    var params = {sourceTaxon: ['one'], two: 'two'};
    t.deepEqual({
        field: [ 'source_taxon_external_id', 'source_taxon_name', 'source_taxon_path', 'source_taxon_path_ids', 'target_taxon_external_id', 'target_taxon_name', 'target_taxon_path', 'target_taxon_path_ids', 'interaction_type', 'number_of_interactions' ],
        sourceTaxon: ['one'],
        two: 'two' }, context.prepareParameters(params), 'initialize pluralized search parameters');

    t.notOk(params['field']);
});
