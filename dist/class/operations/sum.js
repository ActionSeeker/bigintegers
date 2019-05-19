"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
var compare_1 = require("./compare");
var BigIntegerSum = /** @class */ (function () {
    function BigIntegerSum() {
    }
    BigIntegerSum.add = function (erste, zweite) {
        // Compare the two numbers
        var absErste = erste.getAbsoluteInteger();
        var bigger = absErste;
        var absZweite = zweite.getAbsoluteInteger();
        var smaller = absZweite;
        // We presume that erste > zweite
        var compared = new compare_1.BigIntegerCompare().compare(absErste, absZweite);
        if (compared === -1) {
            bigger = absZweite;
            smaller = absErste;
        }
        // Now reverse them
        var biggerNummer = bigger.zahlen.reverse();
        var smallerNummber = smaller.zahlen.reverse();
        // Now add these numbers
        var lengthDiff = bigger.zahlen.length - smaller.zahlen.length;
        while (lengthDiff--) {
            smallerNummber.push(BigIntegerSum.ZERO);
        }
        ;
        var sum = [];
        for (var idx = 0; idx < bigger.zahlen.length; idx++) {
            // Push this digit
            var actualSum = biggerNummer[idx] + smallerNummber[idx] + (sum[idx] ? sum[idx] : 0);
            sum[idx] = actualSum % 10;
            sum[idx + 1] = Math.floor(actualSum / 10);
        }
        return new biginteger_1.BigInteger(sum.reverse().join(''));
    };
    BigIntegerSum.ZERO = 0;
    return BigIntegerSum;
}());
exports.BigIntegerSum = BigIntegerSum;
