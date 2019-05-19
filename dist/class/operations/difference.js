"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
var constants_1 = require("./constants");
var BigIntegerDifference = /** @class */ (function () {
    function BigIntegerDifference() {
    }
    BigIntegerDifference.minus = function (subtrahend, minuend) {
        var _this = this;
        var subtrChunks = subtrahend.chunks;
        var minuChunks = minuend.chunks;
        var chunkDiff = 0;
        var diffChunks = subtrChunks.map(function (_master, $idx) {
            var _minuendLocal = minuChunks[$idx] ? minuChunks[$idx] : 0;
            chunkDiff = _master - _minuendLocal;
            if (chunkDiff < 0) {
                chunkDiff = chunkDiff + biginteger_1.BigInteger.BASAL;
                subtrChunks[$idx + 1] = subtrChunks[$idx + 1] - constants_1.CONSTANTS.UNITY;
            }
            return chunkDiff % biginteger_1.BigInteger.BASAL;
        });
        return new biginteger_1.BigInteger(diffChunks.reverse().map(function (_number) { return _this.pad(_number); }).join(''));
        // // Now reverse them
        // let subtrahendNr = subtrahend.zahlen.reverse();
        // let minuendNr = minuend.zahlen.reverse();
        // // Now add these numbers
        // let lengthDiff = subtrahend.zahlen.length - minuend.zahlen.length;
        // while (lengthDiff--) { minuendNr.push(CONSTANTS.ZERO) };
        // const diff: number[] = [];
        // for (let idx = CONSTANTS.ZERO; idx < subtrahend.zahlen.length; idx++) {
        //     if (subtrahendNr[idx] >= minuendNr[idx]) {
        //         diff.push(subtrahendNr[idx] - minuendNr[idx]);
        //     }
        //     else {
        //         diff.push(subtrahendNr[idx] - minuendNr[idx] + CONSTANTS.RADIX);
        //         subtrahendNr[idx + 1] = (subtrahendNr[idx + 1] - CONSTANTS.UNITY);
        //     }
        // }
        // return new BigInteger(diff.reverse().join(''));
    };
    BigIntegerDifference.pad = function (_number) {
        return Array(Math.max(biginteger_1.BigInteger.CHUNK_SIZE - String(_number).length + 1, 0)).join('0') + _number;
    };
    return BigIntegerDifference;
}());
exports.BigIntegerDifference = BigIntegerDifference;
