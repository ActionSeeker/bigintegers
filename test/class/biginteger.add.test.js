// const { expect } = require('chai');
// const { BigInteger } = require('../../dist/class/biginteger');

// describe('BigInteger addition tests', () => {
//     it('Should add a>0 and b>0 as a + b = a + b where a, b are absolute values', () => {
//         const ersteNummer = new BigInteger('293859348968935374917348781374');
//         const zweiteNummer = new BigInteger('130589427635823812789479829');
//         const result = ersteNummer.add(zweiteNummer);
//         expect(result.toString()).to.equal('293989938396571198730138261203');
//     });

//     it('Should add a<0 and b<0 as -a+(-b) = -(a + b) where a, b are absolute values', () => {
//         const ersteNummer = new BigInteger('-8468938597604850978496087949056');
//         const zweiteNummer = new BigInteger('-49609350790459079804580789350960');
//         const result = ersteNummer.add(zweiteNummer);
//         expect(result.toString()).to.equal('-58078289388063930783076877300016');
//     });

//     it('Should subtract a>0 and b<0 as a - b where a, b are absolute values', () => {
//         const ersteNummer = new BigInteger('43858328758224931849385');
//         const zweiteNummer = new BigInteger('-32917481738478127481834');
//         const result = ersteNummer.add(zweiteNummer);
//         expect(result.toString()).to.equal('10940847019746804367551');
//     });

//     it('Should subtract a<0 and b>0 as -a+b where a, b are absolute values', () => {
//         const ersteNummer = new BigInteger('-71358728937587238959393');
//         const zweiteNummer = new BigInteger('32917481738478127481834');
//         const result = ersteNummer.add(zweiteNummer);
//         expect(result.toString()).to.equal('-38441247199109111477559');
//     });
// });
