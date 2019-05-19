"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
var constants_1 = require("./constants");
var BigIntegerDifference = /** @class */ (function () {
    function BigIntegerDifference() {
    }
    BigIntegerDifference.minus = function (subtrahend, minuend) {
        // Now reverse them
        var subtrahendNr = subtrahend.zahlen.reverse();
        var minuendNr = minuend.zahlen.reverse();
        // Now add these numbers
        var lengthDiff = subtrahend.zahlen.length - minuend.zahlen.length;
        while (lengthDiff--) {
            minuendNr.push(constants_1.CONSTANTS.ZERO);
        }
        ;
        var diff = [];
        for (var idx = constants_1.CONSTANTS.ZERO; idx < subtrahend.zahlen.length; idx++) {
            if (subtrahendNr[idx] >= minuendNr[idx])
                diff.push(subtrahendNr[idx] - minuendNr[idx]);
            else {
                diff.push(subtrahendNr[idx] - minuendNr[idx] + constants_1.CONSTANTS.RADIX);
                subtrahendNr[idx + 1] = ((subtrahendNr[idx + 1] + constants_1.CONSTANTS.RADIX - constants_1.CONSTANTS.UNITY) % constants_1.CONSTANTS.RADIX);
            }
        }
        return new biginteger_1.BigInteger(diff.reverse().join(''));
    };
    return BigIntegerDifference;
}());
exports.BigIntegerDifference = BigIntegerDifference;
