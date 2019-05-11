const { expect } = require('chai');
const { BigInteger } = require('../../dist/class/biginteger');

let bigInteger;

const PLUS = '+';
const MINUS = '-';

describe('BigInteger class tests', () => {
    it('Should compare two negative numbers of same length correct', () => {
        const ersteNummer = new BigInteger('-374917348781374');
        const zweiteNummer = new BigInteger('-823812789479829');
        const result = ersteNummer.compare(zweiteNummer);
        expect(result).to.equal(1);
    });

    it('Should compare two positive numbers of same length correct', () => {
        const ersteNummer = new BigInteger('374917348781374');
        const zweiteNummer = new BigInteger('823812789479829');
        const result = ersteNummer.compare(zweiteNummer);
        expect(result).to.equal(-1);
    });

    it('Should compare two negative numbers of different lengths correct', () => {
        const ersteNummer = new BigInteger('-374917348781374');
        const zweiteNummer = new BigInteger('-9');
        const result = ersteNummer.compare(zweiteNummer);
        expect(result).to.equal(-1);
    });

    it('Should compare two positive numbers of different lengths correct', () => {
        const ersteNummer = new BigInteger('374917348781374');
        const zweiteNummer = new BigInteger('9');
        const result = ersteNummer.compare(zweiteNummer);
        expect(result).to.equal(1);
    });

    it('Should compare two positive numbers with trailing zeroes of different lengths correct', () => {
        const ersteNummer = new BigInteger('020');
        const zweiteNummer = new BigInteger('0008');
        const result = ersteNummer.compare(zweiteNummer);
        expect(result).to.equal(1);
    });
});