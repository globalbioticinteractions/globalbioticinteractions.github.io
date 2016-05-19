var taxon = require('taxon');

module.exports = {
    parseInteractions: parseInteractions,
    toTaxon: toTaxon
};


function parseInteractions(data) {
    var nodes = [];
    var links = [];
    var nodeCache = {}, index = 0, interaction, linkCache = {}, i;
    for (i = 0; interaction = data[i]; i++) {
        var source = interaction['source'];
        source['id'] = source['id'].replace(':', '_');
        var sourceKey = taxon.shortKeyFor(source.path);
        var sourceId = source['id'];
        var target = interaction['target'];
        target['id'] = target['id'].replace(':', '_');
        var targetKey = taxon.shortKeyFor(target.path);
        var targetId = target['id'];

        if ((sourceId !== 'no_match') && !nodeCache[sourceKey]) {
            nodeCache[sourceKey] = source;
            nodeCache[sourceKey]['index'] = index++;
        }
        if ((targetId !== 'no_match') && !nodeCache[targetKey]) {
            nodeCache[targetKey] = target;
            nodeCache[targetKey]['index'] = index++;
        }

        if (
            (sourceId !== 'no_match') &&
                (targetId !== 'no_match') &&
                (sourceKey !== targetKey)
            ) {
            var linkId = sourceKey + '---' + targetKey;
            if (!linkCache[linkId]) {
                linkCache[linkId] = {
                    source: nodeCache[sourceKey]['index'],
                    target: nodeCache[targetKey]['index'],
                    link_id: linkId
                };
            }
        }
    }

    for (var link in linkCache) {
        if (linkCache.hasOwnProperty(link)) {
            links.push(linkCache[link]);
        }
    }

    for (var node in nodeCache) {
        if (nodeCache.hasOwnProperty(node)) {
            nodes.push(nodeCache[node]);
        }
    }
    return { nodes: nodes, links: links};
}

function toTaxon(node) {
    return {id: node.id, name: node.name, path: node.path};
}