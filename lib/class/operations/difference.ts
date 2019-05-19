import { BigInteger } from "../biginteger";
import { CONSTANTS } from "./constants";

export class BigIntegerDifference {

    public static minus(subtrahend: BigInteger, minuend: BigInteger): BigInteger {

        // Now reverse them
        let subtrahendNr = subtrahend.zahlen.reverse();
        let minuendNr = minuend.zahlen.reverse();

        // Now add these numbers
        let lengthDiff = subtrahend.zahlen.length - minuend.zahlen.length;
        while (lengthDiff--) { minuendNr.push(CONSTANTS.ZERO) };

        const diff: number[] = [];
        for (let idx = CONSTANTS.ZERO; idx < subtrahend.zahlen.length; idx++) {
            if (subtrahendNr[idx] >= minuendNr[idx]) diff.push(subtrahendNr[idx] - minuendNr[idx]);
            else {
                diff.push(subtrahendNr[idx] - minuendNr[idx] + CONSTANTS.RADIX);
                subtrahendNr[idx + 1] = ((subtrahendNr[idx + 1] + CONSTANTS.RADIX - CONSTANTS.UNITY) % CONSTANTS.RADIX);
            }
        }

        return new BigInteger(diff.reverse().join(''));

    }
}