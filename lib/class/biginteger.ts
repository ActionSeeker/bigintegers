export class BigInteger {

    /**
     * Static variables - these do not need the class to be initialized to be accessed
     * NULL : sentinel value. If nothing is provided, a BigInteger is this
     * ZERO : The zero of integers. A zero and null are not the same values
     */
    private static readonly NULL: string = '';
    public static readonly ZERO: string = '0';

    /**
     * Constants - These are constants which are used for sanity purposes
     * These are intended to be internal for now as we do not wish these to be publically available
     * And these are unmodifiable and thereby prefixed readonly
     */
    private readonly REGEX: RegExp = /(^[-|+]?[0-9]+$)/gm;

    /**
     * The private variables - These are mutables, and properties of the class
     * These are most probably to be changed within a constructor or by other methods
     */
    private _sign: LocalEnums.Signs;
    private _signPresent: boolean = false;
    private _integer: String;
    private _zahlen: Array<number>;

    /**
     * Constructor
     * @param number The number as the nominee as the bigInteger
     */
    constructor(number: string) {
        if (!this.REGEX.test(number)) {
            throw new Error('ParseException: The nominated candidate does not suit the rules for being an integer');
        }
        this._sign = this.getSignumFrom(number);
        this._signPresent = this.lookAheadSign(number);
        this._integer = this.getSanitizedForm(number);
        this._zahlen = this.getZahlen(number);
    }

    /**
     * Method to look ahead if there's any symbol present in the 
     * @param number The qualified candidate for the BigInteger
     */
    private lookAheadSign(number: string): boolean {
        if (number && (number.charAt(0) === LocalEnums.Signs.PLUS || number.charAt(0) === LocalEnums.Signs.MINUS)) return true;
        return false;
    }

    /**
     * Method to get the sign of the BigInteger
     * @param candidate The qualified candidate for BigInteger
     */
    private getSignumFrom(candidate: string): LocalEnums.Signs {
        if (!candidate) return LocalEnums.Signs.NULL;
        return candidate.charAt(0) === LocalEnums.Signs.MINUS ? LocalEnums.Signs.MINUS : LocalEnums.Signs.PLUS;
    }

    /**
     * Method to sanitize the argument and remove all prefixed zeroes
     * @param number The qualified nominee for bigInteger
     */
    private getSanitizedForm(number: string): string {
        let idx = this._signPresent ? 1 : 0;
        while (number.charAt(idx) === BigInteger.ZERO) idx++;
        return BigInteger.NULL.concat(
            // The symbol probably
            this._signPresent ? this._sign : LocalEnums.Signs.NULL,
            // The digits
            number.substr(idx),
            // What if it is zero
            idx === number.length ? BigInteger.ZERO : BigInteger.NULL
        )
    }

    /**
     * Method to get a list of numbers from a BigInteger
     * @param number The qualified nominee for bigInteger
     */
    private getZahlen(number: string): number[] {
        if (number === BigInteger.NULL) return [];
        let idx = this._signPresent ? 1 : 0;
        return number.substr(idx).split('').map((zahl: string) => parseInt(zahl));
    }

    /**
     * Accessor methods
     */
    public get sign(): LocalEnums.Signs {
        return this._sign;
    }

    public get integer(): String {
        return this._integer;
    }
}

export namespace LocalEnums {
    /**
     * An enum to capture the possible value  of signs
     */
    export enum Signs {
        PLUS = '+',
        MINUS = '-',
        NULL = ''
    }
}