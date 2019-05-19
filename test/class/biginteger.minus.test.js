const { expect } = require('chai');
const { BigInteger } = require('../../dist/class/biginteger');

describe('BigInteger addition tests', () => {
    it('Should add a>0 and b<0 -a-b) = -(a + b) where a, b are absolute values', () => {
        const ersteNummer = new BigInteger('293859348968935374917348781374');
        const zweiteNummer = new BigInteger('-130589427635823812789479829');
        const result = ersteNummer.minus(zweiteNummer);
        expect(result.toString()).to.equal('293989938396571198730138261203');
    });

    it('Should add a<0 and b>0 as a-(-b) = a + b where a, b are absolute values', () => {
        const ersteNummer = new BigInteger('-04957083059636339859230580989');
        const zweiteNummer = new BigInteger('03950284698930859273083598293');
        const result = ersteNummer.minus(zweiteNummer);
        expect(result.toString()).to.equal('-8907367758567199132314179282');
    });
});