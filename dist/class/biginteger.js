"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compare_1 = require("./operations/compare");
var switch_1 = require("./operations/switch");
var signs_1 = require("./signs");
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
        this._zahlen = this.getZahlen();
        this._chunks = this.getChunks();
    }
    /**
     * Method to look ahead if there's any symbol present in the
     * @param number The qualified candidate for the BigInteger
     */
    BigInteger.prototype.lookAheadSign = function (number) {
        if (number && (number.charAt(0) === signs_1.Signs.PLUS || number.charAt(0) === signs_1.Signs.MINUS))
            return true;
        return false;
    };
    /**
     * Method to get the sign of the BigInteger
     * @param candidate The qualified candidate for BigInteger
     */
    BigInteger.prototype.getSignumFrom = function (candidate) {
        if (!candidate)
            return signs_1.Signs.NULL;
        return candidate.charAt(0) === signs_1.Signs.MINUS ? signs_1.Signs.MINUS : signs_1.Signs.PLUS;
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
        this._signPresent ? this._sign : signs_1.Signs.NULL, 
        // The digits
        number.substr(idx), 
        // What if it is zero
        idx === number.length ? BigInteger.ZERO : BigInteger.NULL);
    };
    /**
     * Method to get a list of numbers from a BigInteger
     */
    BigInteger.prototype.getZahlen = function () {
        if (this._integer === BigInteger.NULL)
            return [];
        var idx = this._signPresent ? 1 : 0;
        return this._integer.substr(idx).split('').map(function (zahl) { return parseInt(zahl); });
    };
    /**
     * Based on method prescribed by Justin Warkentin on Stack Overflow
     * URI : https://stackoverflow.com/a/29202760
     */
    BigInteger.prototype.getChunks = function () {
        if (this._integer === BigInteger.NULL)
            return [];
        // First clean the list by removing any signs / symbols
        var idx = this._signPresent ? 1 : 0;
        var zahlen = this._integer.substr(idx);
        // On the cleaned list
        var size = Math.ceil(zahlen.length / BigInteger.CHUNK_SIZE);
        var chunked = new Array(size);
        var offset = zahlen.length;
        for (var idx_1 = 0; idx_1 < size; idx_1++, offset = offset - BigInteger.CHUNK_SIZE) {
            var startLt = offset - BigInteger.CHUNK_SIZE > 0 ? offset - BigInteger.CHUNK_SIZE : 0;
            chunked[idx_1] = parseInt(zahlen.substring(startLt, offset));
        }
        return chunked;
    };
    /**
     * Method to add two big integers
     * @param addendum Another bigInteger
     */
    BigInteger.prototype.add = function (addendum) {
        return new switch_1.Switch(this, addendum, 'ADD').router();
    };
    /**
     * Method to add two big integers
     * @param addendum Another bigInteger
     */
    BigInteger.prototype.minus = function (addendum) {
        return new switch_1.Switch(this, addendum, 'MINUS').router();
    };
    BigInteger.prototype.compare = function (compareTerm) {
        return compare_1.BigIntegerCompare.compare(this, compareTerm);
    };
    BigInteger.prototype.getAbsoluteInteger = function () {
        if (this._integer === BigInteger.NULL)
            BigInteger.NULL;
        var idx = this._signPresent ? 1 : 0;
        return new BigInteger(this._integer.substr(idx));
    };
    /**
     * Method to return if the BigInteger is ZERO or not
     */
    BigInteger.prototype.isZero = function () {
        return this._integer === BigInteger.ZERO;
    };
    /**
     * Method to return if the BigInteger is ONE or not
     */
    BigInteger.prototype.isUnity = function () {
        return this._integer === BigInteger.ONE;
    };
    /**
     * Method to return if the BigInteger is NULL or not
     */
    BigInteger.prototype.isNull = function () {
        return this._integer === BigInteger.NULL;
    };
    BigInteger.prototype.negate = function () {
        if (this._sign === signs_1.Signs.MINUS)
            return this.getAbsoluteInteger();
        return new BigInteger("-" + this.zahlen.join(''));
    };
    BigInteger.prototype.toString = function () {
        return "" + (this._signPresent ? this._sign : '') + this.zahlen.join('');
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
    Object.defineProperty(BigInteger.prototype, "zahlen", {
        get: function () {
            return this._zahlen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BigInteger.prototype, "chunks", {
        get: function () {
            return this._chunks;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Static variables - these do not need the class to be initialized to be accessed
     * NULL : sentinel value. If nothing is provided, a BigInteger is this
     * ZERO : The zero of integers. A zero and null are not the same values
     * CHUNKS_SIZE: Maximum exact integral value is 2**51 - 1, aka 9007199254740991
     * It is safe because we don't use any bitwise sift operators here
     * If we were to use those, then BASAL changes to 2147483647 aka 2**31 - 1
     */
    BigInteger.NULL = '';
    BigInteger.ZERO = '0';
    BigInteger.ONE = '1';
    BigInteger.CHUNK_SIZE = 15;
    BigInteger.BASAL = Math.pow(10, 15); // 10^15
    return BigInteger;
}());
exports.BigInteger = BigInteger;
