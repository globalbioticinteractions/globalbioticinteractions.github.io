var globi = require('globi');
var extend = require('extend');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;
var $ = globi.jQuery;

require('jquery-ui');
var MarkerClusterer = require('node-js-marker-clusterer');

inherits(SearchContext, EventEmitter);

function SearchContext(context) {
    if (!(this instanceof SearchContext)) return new SearchContext(context);
    this.context = extend({ bbox: '-125.53344800000002,32.750323,-114.74487299999998,41.574361' }, context);
}

SearchContext.prototype.update = function(context) {
    this.context = extend(this.context, context);
    this.emit('change', this.context);
};


module.exports = {
    bundle: require('globi-bundle'),
    panels: require('globi-panels'),
    Spinner: require('spin.js'),
    hairball: require('globi-hairball'),
    wheel: require('globi-wheel'),
    spatialSelector: require('globi-spatial-selector'),
    globi: globi,
    search: require('globi-search'),
    searchContext: SearchContext
};

