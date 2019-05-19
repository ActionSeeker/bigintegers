const { expect } = require('chai');
const { BigInteger } = require('../../dist/class/biginteger');

describe('BigInteger addition tests', () => {
    it('Should add a>0 and b>0', () => {
        const ersteNummer = new BigInteger('293859348968935374917348781374');
        const zweiteNummer = new BigInteger('130589427635823812789479829');
        const result = ersteNummer.add(zweiteNummer);
        expect(result.toString()).to.equal('293989938396571198730138261203');
    });

    it('Should add a<0 and b<0', () => {
        const ersteNummer = new BigInteger('-8468938597604850978496087949056');
        const zweiteNummer = new BigInteger('-49609350790459079804580789350960');
        const result = ersteNummer.add(zweiteNummer);
        expect(result.toString()).to.equal('-58078289388063930783076877300016');
    });
});