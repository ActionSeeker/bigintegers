"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var biginteger_1 = require("../biginteger");
var BigIntegerSum = /** @class */ (function () {
    function BigIntegerSum() {
    }
    BigIntegerSum.add = function (addendumEin, addendumZwei) {
        var _this = this;
        var admEinChunks = addendumEin.chunks;
        var admZwChunks = addendumZwei.chunks;
        var carry = 0;
        var chunkSum = 0;
        var sumChunks = admEinChunks.map(function (_master, $idx) {
            chunkSum = (_master + (admZwChunks[$idx] !== void 0 ? admZwChunks[$idx] : 0) + carry);
            carry = Math.floor(chunkSum / biginteger_1.BigInteger.BASAL);
            return chunkSum % biginteger_1.BigInteger.BASAL;
        });
        if (carry != 0)
            sumChunks.push(carry);
        return new biginteger_1.BigInteger(sumChunks.reverse().map(function (_number) { return _this.pad(_number); }).join(''));
        // // Now reverse them
        // let admEinNr = addendumEin.zahlen.reverse();
        // let admZwNr = addendumZwei.zahlen.reverse();
        // // Now add these numbers
        // let lengthDiff = addendumEin.zahlen.length - addendumZwei.zahlen.length;
        // while (lengthDiff--) { admZwNr.push(CONSTANTS.ZERO) };
        // const sum: number[] = [];
        // for (let idx = 0; idx < addendumEin.zahlen.length; idx++) {
        //     // Push this digit
        //     const actualSum = admEinNr[idx] + admZwNr[idx] + (sum[idx] ? sum[idx] : CONSTANTS.ZERO);
        //     sum[idx] = actualSum % CONSTANTS.RADIX;
        //     sum[idx + 1] = Math.floor(actualSum / CONSTANTS.RADIX);
        // }
        // return new BigInteger(sum.reverse().join(''));
    };
    BigIntegerSum.pad = function (_number) {
        return Array(Math.max(biginteger_1.BigInteger.CHUNK_SIZE - String(_number).length + 1, 0)).join('0') + _number;
    };
    return BigIntegerSum;
}());
exports.BigIntegerSum = BigIntegerSum;
