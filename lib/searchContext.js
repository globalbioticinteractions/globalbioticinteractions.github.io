var extend = require('extend');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;
var deep = require('deep');
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
        var before = extend({}, this.searchParameters);
        var after = extend({}, this.searchParameters, searchParameters);
        if (!deep.equals(before, after)) {
            this.searchParameters = after;
            this.emit('searchcontext:searchparameterchange', this.searchParameters);
        }
    },

    updateSearchParameter: function (parameterName, value) {
        var before = extend({}, this.searchParameters);
        var after = extend({}, this.searchParameters);
        if (value) {
            after[parameterName] = value;
        } else if (after[parameterName]) {
            delete after[parameterName];
        }
        if (!deep.equals(before, after)) {
            this.searchParameters = after;
            this.emit('searchcontext:searchparameterchange', this.searchParameters);
        }
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
