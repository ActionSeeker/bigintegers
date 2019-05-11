"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BigInteger = /** @class */ (function () {
    /**
     * Constructor
     * @param number The number as the nominee as the bigInteger
     */
    function BigInteger(number) {
        /**
         * Constants - These are constants which are used for sanity purposes
         * These are intended to be internal for now as we do not wish these to be publically available
         * And these are unmodifiable and thereby prefixed readonly
         */
        this.REGEX = /(^[-|+]?[0-9]+$)/gm;
        this._signPresent = false;
        if (!this.REGEX.test(number)) {
            throw new Error('ParseException: The nominated candidate does not suit the rules for being an integer');
        }
        this._sign = this.getSignumFrom(number);
        this._signPresent = this.lookAheadSign(number);
        this._integer = this.getSanitizedForm(number);
        this._zahlen = this.getZahlen(number);
    }
    /**
     * Method to look ahead if there's any symbol present in the
     * @param number The qualified candidate for the BigInteger
     */
    BigInteger.prototype.lookAheadSign = function (number) {
        if (number && (number.charAt(0) === LocalEnums.Signs.PLUS || number.charAt(0) === LocalEnums.Signs.MINUS))
            return true;
        return false;
    };
    /**
     * Method to get the sign of the BigInteger
     * @param candidate The qualified candidate for BigInteger
     */
    BigInteger.prototype.getSignumFrom = function (candidate) {
        if (!candidate)
            return LocalEnums.Signs.NULL;
        return candidate.charAt(0) === LocalEnums.Signs.MINUS ? LocalEnums.Signs.MINUS : LocalEnums.Signs.PLUS;
    };
    /**
     * Method to sanitize the argument and remove all prefixed zeroes
     * @param number The qualified nominee for bigInteger
     */
    BigInteger.prototype.getSanitizedForm = function (number) {
        var idx = this._signPresent ? 1 : 0;
        while (number.charAt(idx) === BigInteger.ZERO)
            idx++;
        return BigInteger.NULL.concat(
        // The symbol probably
        this._signPresent ? this._sign : LocalEnums.Signs.NULL, 
        // The digits
        number.substr(idx), 
        // What if it is zero
        idx === number.length ? BigInteger.ZERO : BigInteger.NULL);
    };
    /**
     * Method to get a list of numbers from a BigInteger
     * @param number The qualified nominee for bigInteger
     */
    BigInteger.prototype.getZahlen = function (number) {
        if (number === BigInteger.NULL)
            return [];
        var idx = this._signPresent ? 1 : 0;
        return number.substr(idx).split('').map(function (zahl) { return parseInt(zahl); });
    };
    Object.defineProperty(BigInteger.prototype, "sign", {
        /**
         * Accessor methods
         */
        get: function () {
            return this._sign;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BigInteger.prototype, "integer", {
        get: function () {
            return this._integer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Static variables - these do not need the class to be initialized to be accessed
     * NULL : sentinel value. If nothing is provided, a BigInteger is this
     * ZERO : The zero of integers. A zero and null are not the same values
     */
    BigInteger.NULL = '';
    BigInteger.ZERO = '0';
    return BigInteger;
}());
exports.BigInteger = BigInteger;
var LocalEnums;
(function (LocalEnums) {
    /**
     * An enum to capture the possible value  of signs
     */
    var Signs;
    (function (Signs) {
        Signs["PLUS"] = "+";
        Signs["MINUS"] = "-";
        Signs["NULL"] = "";
    })(Signs = LocalEnums.Signs || (LocalEnums.Signs = {}));
})(LocalEnums = exports.LocalEnums || (exports.LocalEnums = {}));
