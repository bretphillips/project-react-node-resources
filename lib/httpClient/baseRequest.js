'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _superagentNoCache = require('superagent-no-cache');

var _superagentNoCache2 = _interopRequireDefault(_superagentNoCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseRequest = function () {
    function baseRequest() {
        _classCallCheck(this, baseRequest);
    }

    _createClass(baseRequest, null, [{
        key: 'get',
        value: function get(url, queryString, headers) {}
    }, {
        key: 'post',
        value: function post(url, queryString, headers) {}
    }]);

    return baseRequest;
}();