import { BigInteger } from "../biginteger";
export declare class Switch {
    /**
     * PUBLIC READONLY fields
     */
    readonly ADD: string;
    readonly DIFF: string;
    /**
     * PRIVATE FIELDS
     * @param a The first BigInteger
     * @param b The second BigInteger
     * @param operation The operation to be performed on them
     */
    private _a;
    private _b;
    private _opr;
    private _case;
    constructor(a: BigInteger, b: BigInteger, operation: string);
    router(): BigInteger;
    private sorter;
}
