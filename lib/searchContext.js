var assert = require('assert');
var extend = require('extend');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;
module.exports = SearchContext;

inherits(SearchContext, EventEmitter);

function SearchContext(searchParameters) {
    if (!(this instanceof SearchContext)) return new SearchContext(searchParameters);
    this.searchParameters = extend({
        interactionType: 'interactsWith',
        resultType: 'json'
    }, searchParameters);
    this.init();
}

extend(SearchContext.prototype, {
    init: function () {
        this.state = {
            ableTofetch: true
        };
    },

    update: function (searchParameters) {
        this.searchParameters = extend(this.searchParameters, searchParameters);
        this.emit('searchcontext:searchparameterchange', this.searchParameters);
    },

    updateSearchParameter: function (parameterName, value) {
        if (value) {
            this.setParameter(parameterName, value);
        } else if (this.searchParameters[parameterName]) {
            delete this.searchParameters[parameterName];
        }
        this.emit('searchcontext:searchparameterchange', this.searchParameters);
    },

    getParameter: function (key) {
        return this.searchParameters[key];
    },

    setParameter: function (name, value) {
        this.searchParameters[name] = value;
    },

    lockFetching: function () {
        this.state.ableTofetch = false;
    },

    unlockFetching: function () {
        this.state.ableTofetch = true;

    },

    isAbleToFetch: function () {
        return this.state.ableTofetch;
    }
});
