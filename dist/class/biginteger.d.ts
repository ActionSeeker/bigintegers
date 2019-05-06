export declare class BigInteger {
    private readonly REGEX;
    private integer;
    private sign;
    static readonly ZERO: string;
    constructor(number: string);
    private sanitize;
    signum(number: string): string;
    getInteger(): string;
    getSign(): string;
}
