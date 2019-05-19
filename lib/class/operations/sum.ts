import { BigInteger } from "../biginteger";
import { CONSTANTS } from "./constants";

export class BigIntegerSum {

    public static add(addendumEin: BigInteger, addendumZwei: BigInteger): BigInteger {
        // Now reverse them
        let admEinNr = addendumEin.zahlen.reverse();
        let admZwNr = addendumZwei.zahlen.reverse();

        // Now add these numbers
        let lengthDiff = addendumEin.zahlen.length - addendumZwei.zahlen.length;
        while (lengthDiff--) { admZwNr.push(CONSTANTS.ZERO) };

        const sum: number[] = [];
        for (let idx = 0; idx < addendumEin.zahlen.length; idx++) {
            // Push this digit
            const actualSum = admEinNr[idx] + admZwNr[idx] + (sum[idx] ? sum[idx] : CONSTANTS.ZERO);
            sum[idx] = actualSum % CONSTANTS.RADIX;
            sum[idx + 1] = Math.floor(actualSum / CONSTANTS.RADIX);
        }

        return new BigInteger(sum.reverse().join(''));
    }

}