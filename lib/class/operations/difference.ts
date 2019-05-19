import { BigInteger } from "../biginteger";
import { CONSTANTS } from "./constants";

export class BigIntegerDifference {

    public static minus(subtrahend: BigInteger, minuend: BigInteger): BigInteger {

        const subtrChunks = subtrahend.chunks;
        const minuChunks = minuend.chunks;
        let chunkDiff = 0;
        const diffChunks: number[] = subtrChunks.map((_master: number, $idx: number) => {
            const _minuendLocal = minuChunks[$idx] ? minuChunks[$idx] : 0;
            chunkDiff = _master - _minuendLocal;
            if (chunkDiff < 0) {
                chunkDiff = chunkDiff + BigInteger.BASAL;
                subtrChunks[$idx + 1] = subtrChunks[$idx + 1] - CONSTANTS.UNITY;
            }
            return chunkDiff % BigInteger.BASAL;
        });
        return new BigInteger(diffChunks.reverse().map(_number => this.pad(_number)).join(''));
    }

    private static pad(_number: number): string {
        return Array(Math.max(BigInteger.CHUNK_SIZE - String(_number).length + 1, 0)).join('0') + _number;
    }
}