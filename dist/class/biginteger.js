"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigInteger = void 0;
// import { BigIntegerCompare } from "./operations/compare";
// import { Switch } from "./operations/switch";
var signs_1 = require("./signs");
var BigInteger = /** @class */ (function () {
    function BigInteger(bignumber) {
        this.REGEX = /(^[-|+]?[0-9]+$)/;
        if (!this.REGEX.test(bignumber)) {
            // nen Fehler werfen
            throw new Error("The given format is incorrect and the number is rejected");
        }
        this._sign = this.extractSignum(bignumber);
        this._digits = this.extractDigits(bignumber);
    }
    /**
     * Return the sign of the number
     * @param bignumber string
     */
    BigInteger.prototype.extractSignum = function (bignumber) {
        /**
         * Wir begehen das erste Zeichnen des eingegebenen Strings
         * We inspect the first symbol of the input string
         */
        if (!bignumber)
            return signs_1.Signum.NULL; // Eine Ausnahme : Mir bin ich nicht so sicher, wenn wir ihr begegnen werden
        return bignumber.charAt(0) === signs_1.Signum.MINUS ? signs_1.Signum.MINUS : signs_1.Signum.PLUS;
    };
    /**
     * Return the number cleaned and arranged as a list
     * @param bignumber string
     */
    BigInteger.prototype.extractDigits = function (bignumber) {
        /**
         * Zuerst müssen wir die Form der Zahl aufräumen
         * Das heißt dass wir einfach die führenden Nullen wegmachen sollen
         */
        var _bignumber = "" + bignumber;
        var _numericalIdx = 0;
        var _lookahead = true;
        var _digits = [];
        if (_bignumber.charAt(0) === signs_1.Signum.MINUS ||
            _bignumber.charAt(0) === signs_1.Signum.PLUS) {
            _numericalIdx = 1;
        }
        for (var idx = _numericalIdx; idx < _bignumber.length; idx++) {
            var _digit = parseInt(_bignumber[idx]);
            if (!_digit && _lookahead)
                continue;
            _digits.push(_digit);
            /**
             * Damit sollte es nur einmal stattfinden
             * With this, it should happen only once
             */
            if (_lookahead)
                _lookahead = false;
        }
        return _digits;
    };
    /**
     * Public method to return the signum of the number
     */
    BigInteger.prototype.getSignum = function () {
        return this._sign;
    };
    return BigInteger;
}());
exports.BigInteger = BigInteger;
