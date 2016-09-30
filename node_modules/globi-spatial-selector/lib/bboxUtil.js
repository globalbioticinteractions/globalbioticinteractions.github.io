var L = require('leaflet');

var bboxUtil = {};
module.exports = bboxUtil;

bboxUtil.toBounds = function (bbox) {
    return L.latLngBounds(
        L.latLng(bbox[1], bbox[0]),
        L.latLng(bbox[3], bbox[2])
    );
};

bboxUtil.fromBounds = function (bounds) {
    var eolBounds = {
        nw_lat: bounds.getNorthEast().lat,
        nw_lng: bounds.getSouthWest().lng,
        se_lat: bounds.getSouthWest().lat,
        se_lng: bounds.getNorthEast().lng
    };
    var tempCoord;
    if (eolBounds.nw_lng > eolBounds.se_lng) {
        tempCoord = eolBounds.nw_lng;
        eolBounds.nw_lng = eolBounds.se_lng;
        eolBounds.se_lng = tempCoord;
    }
    if (eolBounds.nw_lat > eolBounds.se_lat) {
        tempCoord = eolBounds.nw_lat;
        eolBounds.nw_lat = eolBounds.se_lat;
        eolBounds.se_lat = tempCoord;
    }
    return {bbox: [eolBounds.nw_lng, eolBounds.nw_lat, eolBounds.se_lng, eolBounds.se_lat].join(',') };
};