var globi = require('globi');
var globiData = globi.globiData;
var forEach = require('foreach');

function DataParser(data) {}

DataParser.process = function(data) {
    this.data = data;
    var me = this;
    var idCache = [],
        returnData = [];
    data = globi.ResponseMapper(data)();

    forEach(data, function(item) {
        var commonNames = globiData.mapCommonNameList(item['taxon_common_names']),
            commonName = (commonNames['count'] > 0 && commonNames['en']) ? commonNames['en'] : '';
        if (item['taxon_path'] && item['taxon_path_ids']) {
            var paths = item['taxon_path'].split('|').map(function(item) { return item.trim(); }), pathList = [];
            if (paths.length > 0) {
                pathList.push(paths[paths.length - 1]);
            }
            var ids = item['taxon_path_ids'].split('|').map(function(item) { return item.trim(); }), idList = [];
            if (ids.length > 0) {
                idList.push(ids[ids.length-1]);
            }
            for (var i = 0, len = pathList.length; i < len; i++) {
                if (idCache.indexOf(idList[i]) === -1 ) {
                    returnData.push({
                        'name': pathList[i],
                        'label': pathList[i] + ((i === len - 1) && (commonName !== '') ? ' (' + commonName + ')' : ''),
                        'value': idList[i]
                    });
                    idCache.push(idList[i]);
                }
            }
        }
    });
    return returnData;
}

module.exports = DataParser;