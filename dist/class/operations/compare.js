"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
var BigIntegerCompare = /** @class */ (function () {
    function BigIntegerCompare() {
    }
    /**
     * A method to determine to compare the two given bigIntegers
     * @param a A qualified bigInteger
     * @param b Another qualified bigInteger
     * @returns -1 if a < b
     * @returns 0 if a == b
     * @returns 1 if a > b
     */
    BigIntegerCompare.prototype.compare = function (a, b) {
        // When a is negative and b is positive
        if (a.sign === biginteger_1.LocalEnums.Signs.MINUS && b.sign === biginteger_1.LocalEnums.Signs.PLUS)
            return -1;
        // When a is positive and b is negative
        if (a.sign === biginteger_1.LocalEnums.Signs.PLUS && b.sign === biginteger_1.LocalEnums.Signs.MINUS)
            return 1;
        // Otherwise based on length
        // When both are negative and LEN(a) < LEN (b)
        if (a.zahlen.length !== b.zahlen.length) {
            var comparator = a.zahlen.length > b.zahlen.length ? 1 : -1;
            if (a.sign === biginteger_1.LocalEnums.Signs.MINUS)
                return -1 * comparator;
            return comparator;
        }
        if (a.sign === biginteger_1.LocalEnums.Signs.MINUS)
            return -1 * this.compareCore(a, b);
        return 1 * this.compareCore(a, b);
    };
    BigIntegerCompare.prototype.compareCore = function (a, b) {
        var $idx = 0;
        var flag = false;
        do {
            if (a.zahlen[$idx] < b.zahlen[$idx]) {
                flag = true;
                break;
            }
            $idx++;
        } while ($idx < a.zahlen.length);
        if (flag)
            return -1;
        return 0;
    };
    return BigIntegerCompare;
}());
exports.BigIntegerCompare = BigIntegerCompare;
