const { expect } = require('chai');
const { BigInteger } = require('../../dist/class/biginteger');

let bigInteger;

describe('BigInteger class tests', () => {
    it('Should parse a normal integer value correct', () => {
        const NORMAL_INTEGER_CASE = '12481738958901379857359872';
        bigInteger = new BigInteger(NORMAL_INTEGER_CASE);
        expect(bigInteger.integer).to.equal(NORMAL_INTEGER_CASE);
        expect(bigInteger.sign).to.equal('+');
    });

    it('Should parse a negative integer value correct', () => {
        const NEGATIVE_INTEGER_CASE = '-893289578927458939578273857984768';
        bigInteger = new BigInteger(NEGATIVE_INTEGER_CASE);
        expect(bigInteger.integer).to.equal(NEGATIVE_INTEGER_CASE);
        expect(bigInteger.sign).to.equal('-');
    })

    it('Should remove zeroes before the number', () => {
        const ZEROES_CASE = '-0012878';
        bigInteger = new BigInteger(ZEROES_CASE);
        expect(bigInteger.integer).to.equal('-12878');
        expect(bigInteger.sign).to.equal('-');
    })
});