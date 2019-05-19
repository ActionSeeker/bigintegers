import { BigInteger } from "../biginteger";
import { Signs } from "../signs";

export class BigIntegerCompare {

    /**
     * A method to determine to compare the two given bigIntegers
     * @param a A qualified bigInteger
     * @param b Another qualified bigInteger
     * @returns -1 if a < b
     * @returns 0 if a == b
     * @returns 1 if a > b
     */
    public compare(a: BigInteger, b: BigInteger): number {
        // When a is negative and b is positive
        if (a.sign === Signs.MINUS && b.sign === Signs.PLUS) return -1;
        // When a is positive and b is negative
        if (a.sign === Signs.PLUS && b.sign === Signs.MINUS) return 1;
        // Otherwise based on length
        // When both are negative and LEN(a) < LEN (b)
        if (a.zahlen.length !== b.zahlen.length) {
            const comparator = a.zahlen.length > b.zahlen.length ? 1 : -1;
            if (a.sign === Signs.MINUS) return -1 * comparator;
            return comparator;
        }
        if (a.sign === Signs.MINUS) return -1 * this.compareCore(a, b);
        return 1 * this.compareCore(a, b);
    }

    private compareCore(a: BigInteger, b: BigInteger): number {
        let $idx = 0;
        let flag = false;
        do {
            if (a.zahlen[$idx] < b.zahlen[$idx]) { flag = true; break; }
            $idx++;
        } while ($idx < a.zahlen.length);
        if (flag) return -1;
        return 0;
    }

}
