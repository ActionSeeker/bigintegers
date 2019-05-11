const { expect } = require('chai');
const { BigInteger } = require('../../dist/class/biginteger');

let bigInteger;

const PLUS = '+';
const MINUS = '-';

describe('BigInteger class tests', () => {
    it('Should parse a normal integer value correct', () => {
        const REGULAR_BIG_INT = '12481738958901379857359872';
        bigInteger = new BigInteger(REGULAR_BIG_INT);
        expect(bigInteger.integer).to.equal(REGULAR_BIG_INT);
        expect(bigInteger.sign).to.equal(PLUS);
        expect(bigInteger.zahlen.length).to.equal(26);
    });

    it('Should parse a negative integer value correct', () => {
        const NEGATIVE_BIG_INT = '-893289578927458939578273857984768';
        bigInteger = new BigInteger(NEGATIVE_BIG_INT);
        expect(bigInteger.integer).to.equal(NEGATIVE_BIG_INT);
        expect(bigInteger.sign).to.equal(MINUS);
    })

    it('Should remove zeroes before the number', () => {
        const ZEROES_CASE = '-0012878';
        bigInteger = new BigInteger(ZEROES_CASE);
        expect(bigInteger.integer).to.equal('-12878');
        expect(bigInteger.sign).to.equal(MINUS);
    })

    it('Should parse 0 as ZERO', () => {
        const ZERO = '0';
        bigInteger = new BigInteger(ZERO);
        expect(bigInteger.integer).to.equal(BigInteger.ZERO);
        expect(bigInteger.sign).to.equal(PLUS);
    })

    it('Should parse a trail of zeros as ZERO', () => {
        const ZERO = '00000000';
        bigInteger = new BigInteger(ZERO);
        expect(bigInteger.integer).to.equal(BigInteger.ZERO);
        expect(bigInteger.sign).to.equal(PLUS);
    })

    it('Should ignore preceding zeroes in positive number', () => {
        const EIGHT = '0008';
        bigInteger = new BigInteger(EIGHT);
        expect(bigInteger.integer).to.equal('8');
        expect(bigInteger.sign).to.equal(PLUS);
        expect(bigInteger.zahlen).to.deep.equal([8]);
    })

    it('Should throw ParseException when an illegal format is sent', () => {
        const ILLEGAL_BIG_INT = '-12^&*$&*13';
        try {
            bigInteger = new BigInteger(ILLEGAL_BIG_INT);
        } catch (error) {
            expect(error.message).to.equal('ParseException: The nominated candidate does not suit the rules for being an integer');
        }
    })
});