import { Signs } from "./signs";
export declare class BigInteger {
    /**
     * Static variables - these do not need the class to be initialized to be accessed
     * NULL : sentinel value. If nothing is provided, a BigInteger is this
     * ZERO : The zero of integers. A zero and null are not the same values
     */
    private static readonly NULL;
    private static readonly ZERO;
    private static readonly ONE;
    /**
     * Constants - These are constants which are used for sanity purposes
     * These are intended to be internal for now as we do not wish these to be publically available
     * And these are unmodifiable and thereby prefixed readonly
     */
    private readonly REGEX;
    /**
     * The private variables - These are mutables, and properties of the class
     * These are most probably to be changed within a constructor or by other methods
     */
    private _sign;
    private _signPresent;
    private _integer;
    private _zahlen;
    /**
     * Constructor
     * @param number The number as the nominee as the bigInteger
     */
    constructor(number: string);
    /**
     * Method to look ahead if there's any symbol present in the
     * @param number The qualified candidate for the BigInteger
     */
    private lookAheadSign;
    /**
     * Method to get the sign of the BigInteger
     * @param candidate The qualified candidate for BigInteger
     */
    private getSignumFrom;
    /**
     * Method to sanitize the argument and remove all prefixed zeroes
     * @param number The qualified nominee for bigInteger
     */
    private getSanitizedForm;
    /**
     * Method to get a list of numbers from a BigInteger
     */
    private getZahlen;
    /**
     * Method to add two big integers
     * @param addendum Another bigInteger
     */
    add(addendum: BigInteger): BigInteger;
    /**
     * Method to add two big integers
     * @param addendum Another bigInteger
     */
    minus(addendum: BigInteger): BigInteger;
    compare(compareTerm: BigInteger): number;
    getAbsoluteInteger(): BigInteger;
    /**
     * Method to return if the BigInteger is ZERO or not
     */
    isZero(): boolean;
    /**
     * Method to return if the BigInteger is ONE or not
     */
    isUnity(): boolean;
    /**
     * Method to return if the BigInteger is NULL or not
     */
    isNull(): boolean;
    negate(): BigInteger;
    toString(): String;
    /**
     * Accessor methods
     */
    readonly sign: Signs;
    readonly integer: String;
    readonly zahlen: Array<number>;
}
