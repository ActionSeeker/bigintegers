"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
var BigIntegerSum = /** @class */ (function () {
    function BigIntegerSum() {
    }
    BigIntegerSum.prototype.add = function (erste, zweite) {
        return this.plus(erste, zweite);
    };
    BigIntegerSum.prototype.plus = function (erste, zweite) {
        return new biginteger_1.BigInteger('0');
    };
    return BigIntegerSum;
}());
exports.BigIntegerSum = BigIntegerSum;
