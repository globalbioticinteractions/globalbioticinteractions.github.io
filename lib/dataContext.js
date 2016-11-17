var extend = require('extend');
var globi = require('globi');
var globiData = globi.globiData;

module.exports = DataContext;

function DataContext(searchContext) {
    if (!(this instanceof DataContext)) return new DataContext(searchContext);
    this.searchContext = searchContext || { on: function () {
    } };
    this.url = '';
    this.fetcher = null;

    this.init();
    this.events();
}

extend(DataContext.prototype, {
    init: function () {
        this.fetcher = new globi.PaginatedDataFetcher({ url: this.url });
    },

    events: function () {
        var me = this;
        this.searchContext.on('searchcontext:searchparameterchange', proxy(me.updateParameters, me));
    },

    updateParameters: function (parameters) {
        if (this.searchContext.isAbleToFetch('dataContext::updateParameters')) {
            this.searchContext.lockFetching('dataContext::updateParameters');
            this.resolveUrl(parameters);
            this.fetch();
        }
    },

    fetch: function () {
        var me = this;
        this.fetcher.settings.url = this.url;
        this.fetcher.fetch(function (data) {
            data = mapData(globi.ResponseMapper(data)());
            me.searchContext.emit('globisearch:resultsetchanged', data);
        });
    },

    prepareParameters: function (parameters) {
        parameters = extend({
            'field': [
                'source_taxon_external_id',
                'source_taxon_name',
                'source_taxon_path',
                'source_taxon_path_ids',
                'target_taxon_external_id',
                'target_taxon_name',
                'target_taxon_path',
                'target_taxon_path_ids',
                'interaction_type',
                'number_of_interactions']}, parameters);
        return parameters;
    },

    resolveUrl: function (parameters, options) {
        this.url = globiData.urlForTaxonInteractionQuery(this.prepareParameters(parameters));
    }
});

/**
 * @TODO Move to transformation package
 */
function mapData(data) {
    var result = [];
    data.forEach(function (item) {
        item['source'] = {
            id: item['source_taxon_external_id'],
            name: item['source_taxon_name'],
            path: item['source_taxon_path']
        };
        item['target'] = {
            id: item['target_taxon_external_id'],
            name: item['target_taxon_name'],
            path: item['target_taxon_path']
        };
        item['link'] = {
            id: item['interaction_type'],
            numberOfInteractions: item['number_of_interactions']
        };
        result.push(item);
    });
    return result;
}

function proxy(fn, context) {
    return function () {
        return fn.apply(context, arguments);
    };
}