"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseMap = function () {
    function baseMap(propertiesList) {
        _classCallCheck(this, baseMap);

        this.propertiesList = !!propertiesList && Array.isArray(propertiesList) ? propertiesList : [];
    }

    _createClass(baseMap, [{
        key: "mapFromService",
        value: function mapFromService(record) {
            var _this = this;

            if (!(!!record && Object.keys(record).length > 0)) return;

            Object.keys(record).forEach(function (key) {
                if (_this.propertiesList.includes(key) && !!record[key]) _this[key] = record[key];
            });
        }
    }]);

    return baseMap;
}();

exports.default = baseMap;