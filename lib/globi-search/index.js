var jQuery = require('jquery');
var inherits = require('util').inherits;
var EventEmitter = require('events').EventEmitter;
var extend = require('extend');
var forEach = require('foreach');
var globi = require('globi');
var globiData = globi.globiData;
var TypeSelector = require('./lib/TypeSelector.js');
var TaxonSelector = require('./lib/TaxonSelector.js');
var SearchResult = require('./lib/SearchResult.js');
var taxaprisma = require('taxaprisma');

module.exports = Plugin;

inherits(Plugin, EventEmitter);


Plugin.Result = SearchResult;
var ItemData = {
    source: {
        set: false
    },
    target: {
        set: false
    },
    link: {
        set: false
    }
};

var FilterElementContainer = null;

function Plugin(settings) {
    if (!(this instanceof Plugin)) {
        return new Plugin(settings);
    }
    this.settings = extend({
        filterContainer: null,
        resultContainer: null
    }, settings);

    this.searchContext = this.settings.searchContext;
    this.init();
}

extend(Plugin.prototype, {
    init: function () {
        var me = this;
        me.el = null;
        me.sourceSelector = null;
        me.targetSelector = null;
        me.typeSelector = null;
        me.searchResult = null;

        me.buildUi();
        me.events();
    },

    appendTo: function (target) {
        var me = this;
        if (typeof target === 'string') target = document.querySelector(target);

        if (FilterElementContainer === null) {
            FilterElementContainer = target.parentNode;
            target.parentNode.insertBefore(me.filterElement, target);
        }
        this.emit('append', target);
    },

    events: function () {
        var me = this;
        me.searchContext.on('taxonselector:selected', proxy(me.taxonSelected, me));
        me.searchContext.on('typeselector:selected', proxy(me.typeSelected, me));
        me.searchContext.on('searchresult:itemselected', proxy(me.itemSelected, me));
        me.searchContext.on('globisearch:resultsetchanged', proxy(me.showResult, me));

        document.addEventListener("click",function(e) {
            if (e.target && e.target.matches(".scientific-name")) {
                var taxonName = e.target.textContent;
                me.sourceSelector.clear();
                me.sourceSelector.add(taxonName);
                me.targetSelector.clear();
                me.searchContext.update({ sourceTaxon: taxonName, targetTaxon: null });

            }
        });
    },

    showResult: function (data) {
        var me = this;
        var searchHash = {
            includeObservations: true,
            field: ['source_taxon_id', 'source_taxon_name', 'source_taxon_path', 'source_taxon_path_ids'
                , 'source_specimen_life_stage_id', 'source_specimen_life_stage'
                , 'source_specimen_physiological_state_id', 'source_specimen_physiological_state'
                , 'source_specimen_body_part_id', 'source_specimen_body_part'
                , 'source_specimen_sex_id', 'source_specimen_sex'
                , 'source_specimen_basis_of_record'
                , 'interaction_type'
                , 'target_taxon_id', 'target_taxon_name', 'target_taxon_path', 'target_taxon_path_ids'
                , 'target_specimen_life_stage_id',  'target_specimen_life_stage'
                , 'target_specimen_physiological_state_id', 'target_specimen_physiological_state'
                , 'target_specimen_body_part_id', 'target_specimen_body_part'
                , 'target_specimen_sex_id', 'target_specimen_sex'
                , 'target_specimen_basis_of_record'
                , 'latitude', 'longitude'
                , 'study_citation', 'study_url', 'study_source_citation']
        };
        var downloadUrls = ['csv'].map(function(resultType) {
            var searchParams = extend({ limit: 4096 }, me.searchContext.searchParameters, searchHash);
            searchParams.resultType = resultType;
            var link = {};
            link.resultType = resultType;
            link.url = globiData.urlForTaxonInteractionQuery(searchParams);
            return link;
        });
        me.searchContext.emit('searchfilter:showresults', processDataForResultList(data), downloadUrls);
    },

    update: function (data) {
        var me = this;
    },

    buildUi: function () {
        var me = this;
        var table = createElement('table', 'search-row'),
            row = createElement('tr'),
            td;

        me.filterElement = createElement('div', 'search-filter');

        td = createElement('td', 'source-taxon-selector-cell');
        td.appendChild(me.createSourceSelector().el);
        row.appendChild(td);

        td = createElement('td', 'type-selector-cell', ['filter-middle-column']);
        td.appendChild(me.createTypeSelector().el);
        row.appendChild(td);

        td = createElement('td', 'target-taxon-selector-cell');
        td.appendChild(me.createTargetSelector().el);
        row.appendChild(td);

        table.appendChild(row);

        me.filterElement.appendChild(table);

        me.populateTypeSelector();
    },

    createTypeSelector: function () {
        var me = this;
        this.typeSelector = new TypeSelector({
            idPrefix: 'source',
            type: 'interactiontype',
            usePlaceholder: false,
            searchContext: me.searchContext,
            startValue: me.searchContext.searchParameters.interactionType
        });

        this.typeSelector.disable();

        return this.typeSelector;
    },

    createSourceSelector: function () {
        var me = this;
        var taxa = me.searchContext.searchParameters.sourceTaxon || [];
        if (!Array.isArray(taxa)) {
            taxa = [taxa];
        }
        this.sourceSelector = new TaxonSelector({
            idPrefix: 'source',
            type: 'source',
            searchContext: me.searchContext,
            preSelectedTaxa: taxa
        });
        return this.sourceSelector;
    },

    createTargetSelector: function () {
        var me = this;
        var taxa = me.searchContext.searchParameters.targetTaxon || [];
        if (!Array.isArray(taxa)) {
            taxa = [taxa];
        }

        this.targetSelector = new TaxonSelector({
            idPrefix: 'target',
            type: 'target',
            searchContext: me.searchContext,
            preSelectedTaxa: taxa
        });
        return this.targetSelector;
    },

    createSearchResult: function () {
        var me = this;
        this.searchResult = new SearchResult({
            searchContext: me.searchContext
        });

        return this.searchResult;
    },

    populateTypeSelector: function () {
        var me = this;

        globiData.findInteractionTypes(
            [],
            {
                callback: function (data) {
                    forEach(data, function (value, key, object) {
                        me.typeSelector.addOption(camelCaseToRealWords(key), key);
                    });
                    me.typeSelector.enable();
                },
                context: me
            }
        );
    },

    itemSelected: function (data) {
        var me = this;
        if (me.searchContext.isAbleToFetch('GlobiSearch::itemselected')) {
            me.searchContext.lockFetching('GlobiSearch::itemselected');
            if (data['source'] && data['source']['name']) {
                globiData.findTaxonInfo(data['source']['name'], function (sourceData) {
                    extend(sourceData, data['source']);
                    me.populateItemData(sourceData, data['source']['id'], 'source');
                    if (data['target'] && data['target']['name']) {
                        globiData.findTaxonInfo(data['target']['name'], function (targetData) {
                            extend(targetData, data['target']);
                            me.populateItemData(targetData, data['target']['id'], 'target');
                            if (data['link'] && data['link']['name']) {
                                globiData.findInteractionTypes(function (linkData) {
                                    me.populateItemData(linkData, data['link']['id'], 'link');
                                });
                            }
                        });
                    }
                });
            }
        }
    },

    populateItemData: function (data, id, type) {
        var me = this;
        switch (type) {
            case 'source':
            case 'target':
                ItemData[type] = {
                    set: true,
                    id: id,
                    label: '',
                    data: fillTemplate(data)
                };
                break;
            case 'link':
                ItemData['link'] = {
                    set: true,
                    id: id,
                    label: '<a href="' + data[id].termIRI + '">' + camelCaseToRealWords(id) + '</a>',
                    data: ''
                };
                ItemData['source'].label = data[id].source;
                ItemData['target'].label = data[id].target;
                break;
        }
        if (ItemData['source'].set && ItemData['target'].set && ItemData['link'].set) {
            me.searchContext.emit('searchfilter:showitem', ItemData);
            ItemData = { source: {set: false}, target: {set: false}, link: {set: false} };
        }
    },

    /**
     * EVENT HANDLER
     */

    taxonSelected: function (event) {
        this.searchContext.updateSearchParameter(event['emitter'] + 'Taxon', event['data']);
    },

    typeSelected: function (event) {
        this.searchContext.updateSearchParameter('interactionType', event['data']);
    }

});

/**
 * @param elementName
 * @param id
 * @param classes
 * @returns {Element}
 */
function createElement(elementName, id, classes) {
    elementName = elementName || 'div';
    id = id || false;
    classes = classes || [];

    var div = document.createElement(elementName);
    if (id) div.id = id;
    if (classes.length > 0) div.className = classes.join(' ');
    return div;
}

function camelCaseToRealWords(str) {
    return str.replace(/([A-Z])/g, function ($1) {
        return " " + $1.toLowerCase();
    });
}

function proxy(fn, context) {
    return function () {
        return fn.apply(context, arguments);
    };
}

function processDataForResultList(data) {
    var result = [];
    forEach(data, function (item) {
        if ((item['source_taxon_external_id'] !== 'no:match') && (item['target_taxon_external_id'] !== 'no:match')) {
            result.push({
                source: {
                    id: item['source_taxon_external_id'].replace(':', '-@-'),
                    name: item['source_taxon_name'],
                    path: item['source_taxon_path'] ? item['source_taxon_path'] : ''
                },
                target: {
                    id: item['target_taxon_external_id'].replace(':', '-@-'),
                    name: item['target_taxon_name'],
                    path: item['target_taxon_path'] ? item['target_taxon_path'] : ''
                },
                link: {
                    id: item['interaction_type'],
                    name: camelCaseToRealWords(item['interaction_type'])
                }
            })
        }
    });

    return result;
}

function fillTemplate(data) {
    return globi.getTaxonTemplate(data);
}

function getStyleAttribute(path) {
    return 'style="color: ' + taxaprisma.colorFor(path) + ';"'
}
