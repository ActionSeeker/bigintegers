"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signs_1 = require("../signs");
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
    BigIntegerCompare.compare = function (a, b) {
        // When a is negative and b is positive
        if (a.sign === signs_1.Signs.MINUS && b.sign === signs_1.Signs.PLUS)
            return -1;
        // When a is positive and b is negative
        if (a.sign === signs_1.Signs.PLUS && b.sign === signs_1.Signs.MINUS)
            return 1;
        // Otherwise based on length
        // When both are negative and LEN(a) < LEN (b)
        if (a.zahlen.length !== b.zahlen.length) {
            var comparator = a.zahlen.length > b.zahlen.length ? 1 : -1;
            return a.sign === signs_1.Signs.MINUS ? -1 * comparator : comparator;
        }
        // If both have same lengths
        return a.sign === signs_1.Signs.MINUS ? -1 * this.compareCore({ a: a, b: b }) : this.compareCore({ a: a, b: b });
    };
    BigIntegerCompare.compareCore = function (_c) {
        var a = _c.a, b = _c.b;
        var $idx = 0;
        var flag = false;
        var halt = false;
        var _a = a.zahlen.join('');
        var _b = b.zahlen.join('');
        do {
            if (_a[$idx] < _b[$idx]) {
                flag = false;
                halt = true;
                break;
            }
            if (_a[$idx] > _b[$idx]) {
                flag = true;
                halt = true;
                break;
            }
            $idx++;
        } while ($idx < a.zahlen.length);
        if (halt)
            return flag ? 1 : -1;
        return 0;
    };
    return BigIntegerCompare;
}());
exports.BigIntegerCompare = BigIntegerCompare;
