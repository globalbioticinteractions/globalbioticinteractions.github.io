var extend = require('extend');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

module.exports = SearchContext;

inherits(SearchContext, EventEmitter);

function SearchContext(context) {
    if (!(this instanceof SearchContext)) return new SearchContext(context);
    this.context = extend({ bbox: '-125.53,32.75,-114.74,41.57' }, context);
}

SearchContext.prototype.update = function(context) {
    this.context = extend(this.context, context);
    this.emit('change', this.context);
};
