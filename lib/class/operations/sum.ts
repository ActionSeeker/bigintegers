import { BigInteger } from "../biginteger";

export class BigIntegerSum {

    public add(erste: BigInteger, zweite: BigInteger): BigInteger {
        return this.plus(erste, zweite);
    }

    private plus(erste: BigInteger, zweite: BigInteger): BigInteger {
        return new BigInteger('0');
    }

}