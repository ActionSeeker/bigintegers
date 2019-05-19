"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
var constants_1 = require("./constants");
var BigIntegerSum = /** @class */ (function () {
    function BigIntegerSum() {
    }
    BigIntegerSum.add = function (addendumEin, addendumZwei) {
        // Now reverse them
        var admEinNr = addendumEin.zahlen.reverse();
        var admZwNr = addendumZwei.zahlen.reverse();
        // Now add these numbers
        var lengthDiff = addendumEin.zahlen.length - addendumZwei.zahlen.length;
        while (lengthDiff--) {
            admZwNr.push(constants_1.CONSTANTS.ZERO);
        }
        ;
        var sum = [];
        for (var idx = 0; idx < addendumEin.zahlen.length; idx++) {
            // Push this digit
            var actualSum = admEinNr[idx] + admZwNr[idx] + (sum[idx] ? sum[idx] : constants_1.CONSTANTS.ZERO);
            sum[idx] = actualSum % constants_1.CONSTANTS.RADIX;
            sum[idx + 1] = Math.floor(actualSum / constants_1.CONSTANTS.RADIX);
        }
        return new biginteger_1.BigInteger(sum.reverse().join(''));
    };
    return BigIntegerSum;
}());
exports.BigIntegerSum = BigIntegerSum;
