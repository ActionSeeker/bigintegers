"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigInteger = void 0;
// import { BigIntegerCompare } from "./operations/compare";
// import { Switch } from "./operations/switch";
var signs_1 = require("./constants/signs");
var errors_1 = require("./constants/errors");
var BigInteger = /** @class */ (function () {
    function BigInteger(candidate) {
        this.ZERO = 0;
        this.REGEX = /(^[-|+]?[0-9]+$)/;
        /**
         * Some more properties for quicker comparisions
         * Ein paar mehrere Eigenschaften zu schnelleren Vergleichen
         */
        this._isNegative = false;
        this._isEven = false;
        if (!this.REGEX.test(candidate)) {
            /**
             * An error is encountered
             * Es ist ein Fehler aufgetreten
             */
            throw new Error(errors_1.default.FORMAT_INCORRECT);
        }
        // What to do in a default case when we want to have a big integer with no input?
        this._original = candidate; // Save the original
        // Set the sign and negativity here
        this._sign = this._extractSign();
        if (this._sign === signs_1.Signum.MINUS)
            this._isNegative = true;
        this._digits = this._extractDigits();
        this._isEven = this._digits[this._digits.length] % 2 === 0;
    }
    /**
     * Return the sign of the number
     */
    BigInteger.prototype._extractSign = function () {
        /**
         * Here the sign of the huge number entered is returned after an examination
         * Hier wird das Signum der riesigen eingegebenen Nummer nach einer einfachen Untersuchung zurückgeworfen
         */
        if (!this._original)
            return signs_1.Signum.NULL;
        return this._original.charAt(0) === signs_1.Signum.MINUS
            ? signs_1.Signum.MINUS
            : signs_1.Signum.PLUS;
    };
    /**
     * Return the number cleaned and arranged as a list
     */
    BigInteger.prototype._extractDigits = function () {
        var digits = [];
        var leading = true;
        /**
         * A bit of cleanup: remove the leading zeroes :D
         * Ein bisschen Aufräumung: Einfach weg mit den führenden Nullen :D
         */
        for (var $idx = 0; $idx < this._original.length; $idx++) {
            var char = this._original[$idx];
            if (!/[0-9]/.test(char))
                continue;
            var digit = parseInt(char, 10);
            if (digit !== 0)
                leading = false;
            else if (!digit && !leading)
                leading = false;
            if (leading)
                continue;
            digits.push(digit);
        }
        if (!digits.length)
            digits.push(this.ZERO);
        return digits;
    };
    /**
     * Public method to return the signum of the number
     */
    BigInteger.prototype.getSign = function () {
        return this._sign;
    };
    /**
     * Public method to return whether the number is negative
     */
    BigInteger.prototype.isNegative = function () {
        return this._isNegative;
    };
    /**
     * Public method to return whether the number is even
     */
    BigInteger.prototype.isEven = function () {
        return this._isEven;
    };
    /**
     * Method to return the stored number in a cleaner form with correct sign
     */
    BigInteger.prototype.toString = function () {
        var sign = this._sign === signs_1.Signum.MINUS ? '-' : '';
        // With the cleaned up zeroes
        return "" + sign + this._digits.join('');
    };
    return BigInteger;
}());
exports.BigInteger = BigInteger;
