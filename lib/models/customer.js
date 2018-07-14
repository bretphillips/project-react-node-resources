"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Customer = function Customer(name, emailAddress, dateOfBirth) {
    _classCallCheck(this, Customer);

    this.name = name ? name : null;
    this.emailAddress = emailAddress ? emailAddress : null;
    this.dateOfBirth = dateOfBirth ? dateOfBirth : null;
};

exports.default = Customer;