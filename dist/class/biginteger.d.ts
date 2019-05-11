export declare class BigInteger {
    /**
     * Static variables - these do not need the class to be initialized to be accessed
     * NULL : sentinel value. If nothing is provided, a BigInteger is this
     * ZERO : The zero of integers. A zero and null are not the same values
     */
    private static readonly NULL;
    static readonly ZERO: string;
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
     * @param number The qualified nominee for bigInteger
     */
    private getZahlen;
    /**
     * Accessor methods
     */
    readonly sign: LocalEnums.Signs;
    readonly integer: String;
}
export declare namespace LocalEnums {
    /**
     * An enum to capture the possible value  of signs
     */
    enum Signs {
        PLUS = "+",
        MINUS = "-",
        NULL = ""
    }
}
