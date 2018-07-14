"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubscriptionLength = function () {
    function SubscriptionLength(length) {
        _classCallCheck(this, SubscriptionLength);

        this.length = length ? length : 0;
        this.price = this.assignPrice();
    }

    _createClass(SubscriptionLength, [{
        key: "assignPrice",
        value: function assignPrice() {
            var _this = this;

            if (this.length === 0) this.price = 0;

            var subscription = SubscriptionLength.availableSubscriptions.filter(function (sub) {
                return sub.length === _this.length;
            });

            return subscription.length ? subscription[0].price : 0;
        }
    }]);

    return SubscriptionLength;
}();

Object.defineProperty(SubscriptionLength, "availableSubscriptions", {
    enumerable: true,
    writable: true,
    value: [{ length: 7, price: 200 }, { length: 28, price: 750 }]
});
exports.default = SubscriptionLength;