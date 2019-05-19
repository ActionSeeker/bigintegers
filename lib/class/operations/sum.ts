import { BigInteger } from "../biginteger";
import { BigIntegerCompare } from "./compare";

export class BigIntegerSum {

    private static readonly ZERO: number = 0;

    public static add(erste: BigInteger, zweite: BigInteger): BigInteger {
        // Compare the two numbers
        const absErste: BigInteger = erste.getAbsoluteInteger();
        let bigger: BigInteger = absErste;

        const absZweite: BigInteger = zweite.getAbsoluteInteger();
        let smaller: BigInteger = absZweite;

        // We presume that erste > zweite
        const compared: Number = new BigIntegerCompare().compare(absErste, absZweite);

        if (compared === -1) {
            bigger = absZweite;
            smaller = absErste;
        }

        // Now reverse them
        let biggerNummer = bigger.zahlen.reverse();
        let smallerNummber = smaller.zahlen.reverse();

        // Now add these numbers
        let lengthDiff = bigger.zahlen.length - smaller.zahlen.length;
        while (lengthDiff--) { smallerNummber.push(BigIntegerSum.ZERO) };

        const sum: number[] = [];
        for (let idx = 0; idx < bigger.zahlen.length; idx++) {
            // Push this digit
            const actualSum = biggerNummer[idx] + smallerNummber[idx] + (sum[idx] ? sum[idx] : 0);
            sum[idx] = actualSum % 10;
            sum[idx + 1] = Math.floor(actualSum / 10);
        }

        return new BigInteger(sum.reverse().join(''));
    }

}