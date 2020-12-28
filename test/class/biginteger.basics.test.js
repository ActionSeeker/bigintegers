const { expect } = require('chai');
const { BigInteger } = require('../../dist/class/biginteger');
let biginteger;

const PLUS = '+';
const MINUS = '-';

describe('Basic signum tests', () => {
  it('should determine the sign of a negative bigninteger correctly', () => {
    biginteger = new BigInteger(
      '-28413381298748916985691837598728375896297569'
    );
    expect(biginteger.getSignum()).to.equal(MINUS);
  });

  it('should determine the sign of a positive bigninteger correctly', () => {
    biginteger = new BigInteger('23959884574790867904593829509230');
    expect(biginteger.getSignum()).to.equal(PLUS);
  });

  it('should throw an error when the format of the biginteger is incorrect', () => {
    try {
      biginteger = new BigInteger('23959,884574790867904593829509230');
    } catch (error) {
      expect(error).to.not.equal(null);
    }
  });

  it('should parse zero as a basic zero that we define', () => {
    biginteger = new BigInteger('000');
    /**
     * Derzeit weisen wir der Null ein Plus zu
     * At the moment we assign a + sign to zero
     */
    expect(biginteger.getSignum()).to.equal(PLUS);
    expect(biginteger.toString()).to.equal('0');
  });

  it('should ignore leading zeroes and presevre trailing zeroes', () => {
    biginteger = new BigInteger(
      '-0090002358742837532353465634768974957297498600900000000'
    );
    expect(biginteger.getSignum()).to.equal(MINUS);
    expect(biginteger.toString()).to.equal(
      '-90002358742837532353465634768974957297498600900000000'
    );
  });
});
