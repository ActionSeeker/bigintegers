// const { expect } = require('chai');
// const { BigInteger } = require('../../dist/class/biginteger');

// describe('BigInteger subtraction tests', () => {
//     it('Should add a>0 and b<0 as (-a-b) = -(a + b) where a, b are absolute values', () => {
//         const ersteNummer = new BigInteger('293859348968935374917348781374');
//         const zweiteNummer = new BigInteger('-130589427635823812789479829');
//         const result = ersteNummer.minus(zweiteNummer);
//         expect(result.toString()).to.equal('293989938396571198730138261203');
//     });

//     it('Should add a<0 and b>0 as a-(-b) = a + b where a, b are absolute values', () => {
//         const ersteNummer = new BigInteger('-04957083059636339859230580989');
//         const zweiteNummer = new BigInteger('03950284698930859273083598293');
//         const result = ersteNummer.minus(zweiteNummer);
//         expect(result.toString()).to.equal('-8907367758567199132314179282');
//     });

//     it('Should subtract a>0 and b>0 and a > b as a - b where a, b are absolute values', () => {
//         const ersteNummer = new BigInteger('9235898290859028094689048603590283968592');
//         const zweiteNummer = new BigInteger('9836479837489679387689739847698734987698');
//         const result = ersteNummer.minus(zweiteNummer);
//         expect(result.toString()).to.equal('-600581546630651293000691244108451019106');
//     });

//     it('Should subtract a>0 and b>0 and a > b as a - b where a, b are absolute values', () => {
//         const ersteNummer = new BigInteger('9239858270000237586723875');
//         const zweiteNummer = new BigInteger('1288958278578237586723875');
//         const result = ersteNummer.minus(zweiteNummer);
//         expect(result.toString()).to.equal('7950899991422000000000000');
//     });

//     it('Should subtract a<0 and b<0 as -a + b where a, b are absolute values', () => {
//         const ersteNummer = new BigInteger('-9239858270000237586723875');
//         const zweiteNummer = new BigInteger('-1288958278578237586723875');
//         const result = ersteNummer.minus(zweiteNummer);
//         expect(result.toString()).to.equal('-7950899991422000000000000');
//     });
// });
