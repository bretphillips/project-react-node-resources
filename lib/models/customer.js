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

var Customer = function (_baseMap) {
    _inherits(Customer, _baseMap);

    function Customer(name, emailAddress, dateOfBirth) {
        _classCallCheck(this, Customer);

        var _this = _possibleConstructorReturn(this, (Customer.__proto__ || Object.getPrototypeOf(Customer)).call(this, Customer.propertiesList));

        _this.name = name ? name : null;
        _this.emailAddress = emailAddress ? emailAddress : null;
        _this.dateOfBirth = dateOfBirth ? dateOfBirth : null;
        return _this;
    }

    return Customer;
}(_baseMap3.default);

Object.defineProperty(Customer, 'propertiesList', {
    enumerable: true,
    writable: true,
    value: ['name', 'emailAddress', 'dateOfBirth']
});
exports.default = Customer;