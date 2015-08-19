var test = require('tape');
var TypeSelector = require('../lib/TypeSelector');

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

    var testSelector = new TypeSelector({foo: 'bar'});

    t.equals(testSelector.settings.foo, 'bar');
    t.equals(testSelector.settings.options.length, 0);

    testSelector = new TypeSelector({options: [F.option1, F.option2]});
    t.equals(testSelector.settings.options.length, 2);
});

test('UsePlaceholder as default setting', function(t) {
    t.plan(2);

    var testSelector = new TypeSelector();
    t.equals(testSelector.options.length, 1);

    testSelector = new TypeSelector({usePlaceholder: false});
    t.equals(testSelector.options.length, 0);
});

test('Add Options', function(t) {
    t.plan(4);

    var testSelector = new TypeSelector({usePlaceholder: false});

    testSelector.addOption(F.option1);
    t.equals(testSelector.options.length, 1);

    testSelector.addOption('baz');
    t.equals(testSelector.options.length, 2);

    testSelector.addOption(F.option1);
    t.equals(testSelector.options.length, 2);

    testSelector.addOption(F.option2);
    t.equals(testSelector.options.length, 3);
});


test('Remove Options', function(t) {
    t.plan(3);

    var testSelector = new TypeSelector({usePlaceholder: false});

    testSelector.addOption(F.option1);
    testSelector.addOption('baz');
    testSelector.addOption(F.option2);

    testSelector.removeOption('baz');
    t.equals(testSelector.options.length, 2);

    testSelector.removeOption('bar');
    t.equals(testSelector.options.length, 2);

    testSelector.removeOption(F.option1);
    t.equals(testSelector.options.length, 1);
});

test('Rendered Structure', function(t) {
    t.plan(1);

    var testSelector = new TypeSelector({usePlaceholder: false});
    document.body.appendChild(testSelector.el);

    testSelector.addOption(F.option1);
    testSelector.addOption('baz');
    testSelector.addOption(F.option2);
    testSelector.removeOption(F.option1);

    var selectBox = document.getElementsByClassName('eol-interaction-type-selector')[0];
    var options = selectBox.children;

    t.equals(options.length, 2);
});

test('Clear', function(t) {
    t.plan(1);

    var testSelector = new TypeSelector();
    document.body.appendChild(testSelector.el);

    testSelector.addOption(F.option1);
    testSelector.addOption('baz');
    testSelector.addOption(F.option2);
    testSelector.removeOption(F.option1);

    testSelector.clear();
    t.equals(testSelector.options.length, 0);
});
