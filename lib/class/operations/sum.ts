// import { BigInteger } from "../biginteger";
// import { CONSTANTS } from "./constants";

// export class BigIntegerSum {

//     public static add(addendumEin: BigInteger, addendumZwei: BigInteger): BigInteger {

//         const admEinChunks = addendumEin.chunks;
//         const admZwChunks = addendumZwei.chunks;
//         let carry = 0;
//         let chunkSum = 0;
//         const sumChunks: number[] = admEinChunks.map((_master: number, $idx: number) => {
//             chunkSum = (_master + (admZwChunks[$idx] !== void 0 ? admZwChunks[$idx] : 0) + carry);
//             carry = Math.floor(chunkSum / BigInteger.BASAL);
//             return chunkSum % BigInteger.BASAL;
//         });
//         if (carry != 0) sumChunks.push(carry);
//         return new BigInteger(sumChunks.reverse().map(_number => this.pad(_number)).join(''));
//     }

//     private static pad(_number: number): string {
//         return Array(Math.max(BigInteger.CHUNK_SIZE - String(_number).length + 1, 0)).join('0') + _number;
//     }

// }
