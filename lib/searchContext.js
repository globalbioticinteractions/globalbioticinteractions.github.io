var assert = require('assert');
var extend = require('extend');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

module.exports = SearchContext;

inherits(SearchContext, EventEmitter);

// a mock @TODO remove after SearchContext implementation
var INITIAL_BBOX = '-125.53,32.75,-114.74,41.57';

function SearchContext(context) {
    if (!(this instanceof SearchContext)) return new SearchContext(context);
    this.context = extend({
        bbox: INITIAL_BBOX
    }, context);
    this.init();
}

extend(SearchContext.prototype, {
    init: function() {
        this.searchParameters = {
            'interactionType': null,
            'sourceTaxon': null,
            'targetTaxon': null,
            'bbox': INITIAL_BBOX
        };
    },

    update: function(context) {
        this.context = extend(this.context, context);
        this.emit('change', this.context);
    },

    /**
     * @TODO rename/remove after refactoring #update method
     */
    updateSearchParameter: function(parameterName, value) {
        assert.equal(true, this.searchParameters.hasOwnProperty(parameterName),
            'SearchContext: unknown search parameterName ' + parameterName);

        this.searchParameters[parameterName] = value || null;
        this.emit('searchcontext:searchparameterchange', this.searchParameters);
    }
});

