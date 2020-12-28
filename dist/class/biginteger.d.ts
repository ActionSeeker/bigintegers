import { Signum } from "./signs";
export declare class BigInteger {
    private readonly REGEX;
    /**
     * Was brauchen wir, wenn wir eine große Zahl beschreiben sollen ?
     * Dafür brauchen wir noch ein Array, ins wir
     * einfach die eigentlichen Ziffern legen können
     *
     * What do we need when we need to describe a big number ?
     * We need an array in which we can put the individual digits
     */
    private _digits;
    private _sign;
    constructor(bignumber: string);
    /**
     * Return the sign of the number
     * @param bignumber string
     */
    private extractSignum;
    /**
     * Return the number cleaned and arranged as a list
     * @param bignumber string
     */
    private extractDigits;
    /**
     * Public method to return the signum of the number
     */
    getSignum(): Signum;
}
