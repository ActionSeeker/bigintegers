export class BigInteger {

    private readonly REGEX: RegExp = /(^[-|+]?[0-9]+$)/gm;
    private integer: string = '0';
    private sign: string = '+';
    static readonly ZERO: string = '0';
    private numberList: Array<number> = [];

    constructor(number: string) {
        if (this.REGEX.test(number)) {
            this.integer = number;
        }
        this.integer = this.sanitize(this.integer);
        this.numberList = this.getNumberList(this.integer);
    }

    private getNumberList(zahlen: string): number[] {
        const nummer: number[] = [];
        zahlen.split('').forEach((zahl: string) => {
            nummer.push(parseInt(zahl));
        })
        return nummer;
    }

    private sanitize(number: string): string {
        let idx = 0;
        this.sign = this.signum(number);
        if (number[0] === ('-' || '+')) idx++;
        while (number[idx] === BigInteger.ZERO) idx++;
        return ''.concat(
            (number[0] === '+' || number[0] === '-') ? number[0] : '',
            number.substr(idx),
            idx === number.length ? '0' : ''
        )
    }

    signum(number: string): string {
        return number[0] === '-' ? '-' : '+';
    }

    getInteger(): string {
        return this.integer;
    }

    getSign(): string {
        return this.sign;
    }
}