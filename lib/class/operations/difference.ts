import { BigInteger } from "../biginteger";

export class BigIntegerDifference {

    private static readonly ZERO: number = 0;
    private static readonly RADIX: number = 10;

    public static minus(subtrahend: BigInteger, minuend: BigInteger): BigInteger {

        // Now reverse them
        let subtrahendNr = subtrahend.zahlen.reverse();
        let minuendNr = minuend.zahlen.reverse();

        // Now add these numbers
        let lengthDiff = subtrahend.zahlen.length - minuend.zahlen.length;
        while (lengthDiff--) { minuendNr.push(0) };

        const diff: number[] = [];
        for (let idx = 0; idx < subtrahend.zahlen.length; idx++) {
            if (subtrahendNr[idx] >= minuendNr[idx]) diff.push(subtrahendNr[idx] - minuendNr[idx]);
            else {
                diff.push(subtrahendNr[idx] - minuendNr[idx] + 10);
                subtrahendNr[idx + 1] = ((subtrahendNr[idx + 1] + 10 - 1) % 10);
            }
        }

        return new BigInteger(diff.reverse().join(''));

    }
}