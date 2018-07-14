'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _baseMap2 = require('../mappers/baseMap');

var _baseMap3 = _interopRequireDefault(_baseMap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Vehicle Class
 * Assumptions:
 * 1 - this would evolve to a compositional model containing a formal 'make' and 'model' class member;
 * classification and other business factors to be identified
 * simplified for brevity
 */
var Vehicle = function (_baseMap) {
    _inherits(Vehicle, _baseMap);

    function Vehicle(make, model, year, vin, odometer) {
        _classCallCheck(this, Vehicle);

        var _this = _possibleConstructorReturn(this, (Vehicle.__proto__ || Object.getPrototypeOf(Vehicle)).call(this, Vehicle.propertiesList));

        _this.make = make || null;
        _this.model = model || null;
        _this.year = year || 0;
        _this.vin = vin || null;
        _this.odometer = odometer || 0;
        return _this;
    }

    return Vehicle;
}(_baseMap3.default);

Object.defineProperty(Vehicle, 'propertiesList', {
    enumerable: true,
    writable: true,
    value: ['make', 'model', 'year', 'vin', 'odometer']
});
exports.default = Vehicle;