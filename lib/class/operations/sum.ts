import { BigInteger } from "../biginteger";

export class BigIntegerSum {

    private static readonly ZERO: number = 0;

    public static add(addendumEin: BigInteger, addendumZwei: BigInteger): BigInteger {
        // Now reverse them
        let admEinNr = addendumEin.zahlen.reverse();
        let admZwNr = addendumZwei.zahlen.reverse();

        // Now add these numbers
        let lengthDiff = addendumEin.zahlen.length - addendumZwei.zahlen.length;
        while (lengthDiff--) { admZwNr.push(BigIntegerSum.ZERO) };

        const sum: number[] = [];
        for (let idx = 0; idx < addendumEin.zahlen.length; idx++) {
            // Push this digit
            const actualSum = admEinNr[idx] + admZwNr[idx] + (sum[idx] ? sum[idx] : 0);
            sum[idx] = actualSum % 10;
            sum[idx + 1] = Math.floor(actualSum / 10);
        }

        return new BigInteger(sum.reverse().join(''));
    }

}