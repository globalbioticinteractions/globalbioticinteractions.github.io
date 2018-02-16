var test = require('tape');
var TaxonSelector = require('../lib/TaxonSelector');

var fixtures = F = {
    option1: {
        'label': 'label1',
        'value': 'value1'
    },
    option2: {
        'label': 'label2',
        'value': 'value2'
    },
    option3: {
        'label': 'label3',
        'value': 'value3'
    }
};

test('Pass Settings Into constructor', function(t) {
    t.plan(3);

    var testSelector = new TaxonSelector({preSelectedTaxa: ['bar']});
    t.deepEquals(testSelector.settings.preSelectedTaxa, ['bar']);
    testSelector.init();

    t.ok(testSelector.el);

    t.equals(testSelector.el.querySelector('.token-input-token > p').textContent, 'bar', 'before render');
});