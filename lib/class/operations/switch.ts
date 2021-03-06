// import { BigInteger } from "../biginteger";
// import { BigIntegerSum } from "./sum";
// import { BigIntegerDifference } from "./difference";
// import { Signs } from "../signs";
// import { BigIntegerCompare } from "./compare";

// const { PLUS, MINUS } = Signs

// export class Switch {

//     /**
//      * PUBLIC READONLY fields
//      */
//     public readonly ADD: string = 'ADD';
//     public readonly DIFF: string = 'MINUS';

//     /**
//      * PRIVATE FIELDS
//      * @param a The first BigInteger
//      * @param b The second BigInteger
//      * @param operation The operation to be performed on them
//      */
//     private _a: BigInteger;
//     private _b: BigInteger;
//     private _opr: String;
//     private _case: Number = 0;

//     constructor(a: BigInteger, b: BigInteger, operation: string) {
//         this._a = a;
//         this._b = b;
//         this._opr = operation;
//     }

//     public router(): BigInteger {
//         const signOfA = this._a.sign;
//         const signOfB = this._b.sign;
//         // We call add(a, b)
//         if ((signOfA === PLUS && signOfB === PLUS && this._opr === this.ADD
//             || (signOfA === PLUS && signOfB === MINUS && this._opr === this.DIFF))) this._case = 1;
//         // We call add(-a, -b)
//         if ((signOfA === MINUS && signOfB === MINUS && this._opr === this.ADD)
//             || (signOfA === MINUS && signOfB === PLUS && this._opr === this.DIFF)) this._case = 2;
//         // We call diff(a,b)
//         if ((signOfA === PLUS && signOfB === PLUS && this._opr === this.DIFF)
//             || (signOfA === PLUS && signOfB === MINUS && this._opr === this.ADD)) this._case = 3;
//         //We call diff(b,a)
//         if ((signOfA === MINUS && signOfB === MINUS && this._opr === this.DIFF)
//             || (signOfA === MINUS && signOfB === PLUS && this._opr === this.ADD)) this._case = 4;
//         return this.sorter();
//     }

//     private sorter(): BigInteger {

//         let bigger: BigInteger = this._a.getAbsoluteInteger();
//         let smaller: BigInteger = this._b.getAbsoluteInteger();

//         let swapped: Boolean = false;

//         if (BigIntegerCompare.compare(bigger, smaller) === -1) {
//             swapped = true;
//             [bigger, smaller] = [smaller, bigger];
//         }

//         if (this._case === 1) return BigIntegerSum.add(bigger, smaller);
//         if (this._case === 2) return BigIntegerSum.add(bigger, smaller).negate(); // Multiply this with -1
//         if (this._case === 3) {
//             const basicResult: BigInteger = BigIntegerDifference.minus(bigger, smaller);
//             return swapped ? basicResult.negate() : basicResult;
//         }
//         if (this._case === 4) {
//             const basicResult: BigInteger = BigIntegerDifference.minus(bigger, smaller);
//             return swapped ? basicResult : basicResult.negate();
//         }
//         return new BigInteger('');
//     }
// }