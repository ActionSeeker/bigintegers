import { Signum } from './constants/signs';
export declare class BigInteger {
    private readonly ZERO;
    private readonly REGEX;
    /**
     * What do we require to be able to describe a big number?
     * Basically an array in which we can place every digit of it.
     *
     * Was benötigen wir um eine riesige Nummer beschreiben zu können?
     * Eigentlich ein Array, in das wir jede Ziffer deren setzen können.
     */
    private _original;
    private _digits;
    private _sign;
    /**
     * Some more properties for quicker comparisions
     * Ein paar mehrere Eigenschaften zu schnelleren Vergleichen
     */
    private _isNegative;
    private _isEven;
    constructor(candidate: string);
    /**
     * Return the sign of the number
     */
    private _extractSign;
    /**
     * Return the number cleaned and arranged as a list
     */
    private _extractDigits;
    /**
     * Public method to return the signum of the number
     */
    getSign(): Signum;
    /**
     * Public method to return whether the number is negative
     */
    isNegative(): boolean;
    /**
     * Public method to return whether the number is even
     */
    isEven(): boolean;
    /**
     * Method to return the stored number in a cleaner form with correct sign
     */
    toString(): string;
}
