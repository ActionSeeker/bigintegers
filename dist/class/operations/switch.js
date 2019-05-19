"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
var sum_1 = require("./sum");
var difference_1 = require("./difference");
var signs_1 = require("../signs");
var compare_1 = require("./compare");
var PLUS = signs_1.Signs.PLUS, MINUS = signs_1.Signs.MINUS;
var Switch = /** @class */ (function () {
    function Switch(a, b, operation) {
        /**
         * PUBLIC READONLY fields
         */
        this.ADD = 'ADD';
        this.DIFF = 'MINUS';
        this._case = 0;
        this._a = a;
        this._b = b;
        this._opr = operation;
    }
    Switch.prototype.router = function () {
        var signOfA = this._a.sign;
        var signOfB = this._b.sign;
        // We call add(a, b)
        if ((signOfA === PLUS && signOfB === PLUS && this._opr === this.ADD
            || (signOfA === PLUS && signOfB === MINUS && this._opr === this.DIFF)))
            this._case = 1;
        // We call add(-a, -b)
        if ((signOfA === MINUS && signOfB === MINUS && this._opr === this.ADD)
            || (signOfA === MINUS && signOfB === PLUS && this._opr === this.DIFF))
            this._case = 2;
        // We call diff(a,b)
        if ((signOfA === PLUS && signOfB === PLUS && this._opr === this.DIFF)
            || (signOfA === PLUS && signOfB === MINUS && this._opr === this.ADD))
            this._case = 3;
        //We call diff(b,a)
        if ((signOfA === MINUS && signOfB === MINUS && this._opr === this.DIFF)
            || (signOfA === MINUS && signOfB === PLUS && this._opr === this.ADD))
            this._case = 4;
        return this.sorter();
    };
    Switch.prototype.sorter = function () {
        var _c;
        var bigger = this._a.getAbsoluteInteger();
        var smaller = this._b.getAbsoluteInteger();
        var swapped = false;
        if (compare_1.BigIntegerCompare.compare(bigger, smaller) === -1) {
            swapped = true;
            _c = [smaller, bigger], bigger = _c[0], smaller = _c[1];
        }
        if (this._case === 1)
            return sum_1.BigIntegerSum.add(bigger, smaller);
        if (this._case === 2)
            return sum_1.BigIntegerSum.add(bigger, smaller).negate(); // Multiply this with -1
        if (this._case === 3) {
            var basicResult = difference_1.BigIntegerDifference.minus(bigger, smaller);
            return swapped ? basicResult.negate() : basicResult;
        }
        if (this._case === 4) {
            var basicResult = difference_1.BigIntegerDifference.minus(bigger, smaller);
            return swapped ? basicResult : basicResult.negate();
        }
        return new biginteger_1.BigInteger('');
    };
    return Switch;
}());
exports.Switch = Switch;
