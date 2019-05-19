const { expect } = require('chai');
const { BigInteger } = require('../../dist/class/biginteger');

describe('BigInteger addition tests', () => {
    it('Should add a>0 and b>0', () => {
        const ersteNummer = new BigInteger('293859348968935374917348781374');
        const zweiteNummer = new BigInteger('130589427635823812789479829');
        const result = ersteNummer.add(zweiteNummer);
        expect(result.zahlen.join('')).to.equal('293989938396571198730138261203');
    });
});