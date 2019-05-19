"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
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
            minuendNr.push(0);
        }
        ;
        var diff = [];
        for (var idx = 0; idx < subtrahend.zahlen.length; idx++) {
            if (subtrahendNr[idx] >= minuendNr[idx])
                diff.push(subtrahendNr[idx] - minuendNr[idx]);
            else {
                diff.push(subtrahendNr[idx] - minuendNr[idx] + 10);
                subtrahendNr[idx + 1] = ((subtrahendNr[idx + 1] + 10 - 1) % 10);
            }
        }
        return new biginteger_1.BigInteger(diff.reverse().join(''));
    };
    BigIntegerDifference.ZERO = 0;
    BigIntegerDifference.RADIX = 10;
    return BigIntegerDifference;
}());
exports.BigIntegerDifference = BigIntegerDifference;
