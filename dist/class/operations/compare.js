"use strict";
// import { BigInteger } from "../biginteger";
// import { Signs } from "../signs";
// export class BigIntegerCompare {
//     /**
//      * A method to determine to compare the two given bigIntegers
//      * @param a A qualified bigInteger
//      * @param b Another qualified bigInteger
//      * @returns -1 if a < b
//      * @returns 0 if a == b
//      * @returns 1 if a > b
//      */
//     public static compare(a: BigInteger, b: BigInteger): number {
//         // When a is negative and b is positive
//         if (a.sign === Signs.MINUS && b.sign === Signs.PLUS) return -1;
//         // When a is positive and b is negative
//         if (a.sign === Signs.PLUS && b.sign === Signs.MINUS) return 1;
//         // Otherwise based on length
//         // When both are negative and LEN(a) < LEN (b)
//         if (a.chunks.length !== b.chunks.length) {
//             const comparator = a.chunks.length > b.chunks.length ? 1 : -1;
//             return a.sign === Signs.MINUS ? -1 * comparator : comparator;
//         }
//         // If both have same lengths
//         return a.sign === Signs.MINUS ? -1 * this.compareCore({ a, b }) : this.compareCore({ a, b });
//     }
//     private static compareCore({ a, b }: { a: BigInteger; b: BigInteger; }): number {
//         let $idx = a.chunks.length;
//         let flag = false;
//         let halt = false;
//         const _a: number[] = a.chunks;
//         const _b: number[] = b.chunks;
//         do {
//             if (_a[$idx] < _b[$idx]) { flag = false; halt = true; break; }
//             if (_a[$idx] > _b[$idx]) { flag = true; halt = true; break; }
//         } while ($idx--);
//         if (halt) return flag ? 1 : -1;
//         return 0;
//     }
// }
