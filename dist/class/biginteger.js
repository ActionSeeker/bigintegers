"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BigInteger = /** @class */ (function () {
    function BigInteger(number) {
        this.REGEX = /(^[-|+]?[0-9]+$)/gm;
        this.integer = '0';
        this.sign = '+';
        if (this.REGEX.test(number)) {
            this.integer = number;
        }
        this.integer = this.sanitize(this.integer);
    }
    BigInteger.prototype.sanitize = function (number) {
        var idx = 0;
        this.sign = this.signum(number);
        if (number[0] === ('-' || '+'))
            idx++;
        while (number[idx] === BigInteger.ZERO)
            idx++;
        return ''.concat((number[0] === '+' || number[0] === '-') ? number[0] : '', number.substr(idx), idx === number.length ? '0' : '');
    };
    BigInteger.prototype.signum = function (number) {
        return number[0] === '-' ? '-' : '+';
    };
    BigInteger.prototype.getInteger = function () {
        return this.integer;
    };
    BigInteger.prototype.getSign = function () {
        return this.sign;
    };
    BigInteger.ZERO = '0';
    return BigInteger;
}());
exports.BigInteger = BigInteger;
