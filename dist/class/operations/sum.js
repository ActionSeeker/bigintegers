"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
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
            admZwNr.push(BigIntegerSum.ZERO);
        }
        ;
        var sum = [];
        for (var idx = 0; idx < addendumEin.zahlen.length; idx++) {
            // Push this digit
            var actualSum = admEinNr[idx] + admZwNr[idx] + (sum[idx] ? sum[idx] : 0);
            sum[idx] = actualSum % 10;
            sum[idx + 1] = Math.floor(actualSum / 10);
        }
        return new biginteger_1.BigInteger(sum.reverse().join(''));
    };
    BigIntegerSum.ZERO = 0;
    return BigIntegerSum;
}());
exports.BigIntegerSum = BigIntegerSum;
