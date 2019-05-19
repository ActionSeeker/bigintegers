const { expect } = require('chai');
const { BigInteger } = require('../../dist/class/biginteger');

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

    it('Should compare two integers of opposite signs correct', () => {
        const ersteNummer = new BigInteger('-02948');
        const zweiteNummer = new BigInteger('00193482');
        const result = ersteNummer.compare(zweiteNummer);
        expect(result).to.equal(-1);
    });

    it('Should compare this special case of same signs correct', () => {
        const ersteNummer = new BigInteger('9239858270000237586723875');
        const zweiteNummer = new BigInteger('1288958278578237586723875');
        const result = ersteNummer.compare(zweiteNummer);
        expect(result).to.equal(1);
    });

    it('Should compare this special case of same signs correct', () => {
        const ersteNummer = new BigInteger('9235898290859028094689048603590283968592');
        const zweiteNummer = new BigInteger('9836479837489679387689739847698734987698');
        const result = ersteNummer.compare(zweiteNummer);
        expect(result).to.equal(-1);
    });
});