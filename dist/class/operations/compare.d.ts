import { BigInteger } from "../biginteger";
export declare class BigIntegerCompare {
    /**
     * A method to determine to compare the two given bigIntegers
     * @param a A qualified bigInteger
     * @param b Another qualified bigInteger
     * @returns -1 if a < b
     * @returns 0 if a == b
     * @returns 1 if a > b
     */
    compare(a: BigInteger, b: BigInteger): number;
    private compareCore;
}
