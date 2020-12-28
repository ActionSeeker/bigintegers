// import { BigIntegerCompare } from "./operations/compare";
// import { Switch } from "./operations/switch";
import { Signum } from "./signs";

export class BigInteger {
  private readonly REGEX: RegExp = /(^[-|+]?[0-9]+$)/;
  /**
   * Was brauchen wir, wenn wir eine große Zahl beschreiben sollen ?
   * Dafür brauchen wir noch ein Array, ins wir
   * einfach die eigentlichen Ziffern legen können
   *
   * What do we need when we need to describe a big number ?
   * We need an array in which we can put the individual digits
   */
  private _digits: Array<number>;
  private _sign: Signum;

  constructor(bignumber: string) {
    if (!this.REGEX.test(bignumber)) {
      // nen Fehler werfen
      throw new Error(
        "The given format is incorrect and the number is rejected"
      );
    }
    this._sign = this.extractSignum(bignumber);
    this._digits = this.extractDigits(bignumber);
  }

  /**
   * Return the sign of the number
   * @param bignumber string
   */
  private extractSignum(bignumber: string): Signum {
    /**
     * Wir begehen das erste Zeichnen des eingegebenen Strings
     * We inspect the first symbol of the input string
     */
    if (!bignumber) return Signum.NULL; // Eine Ausnahme : Mir bin ich nicht so sicher, wenn wir ihr begegnen werden
    return bignumber.charAt(0) === Signum.MINUS ? Signum.MINUS : Signum.PLUS;
  }

  /**
   * Return the number cleaned and arranged as a list
   * @param bignumber string
   */
  private extractDigits(bignumber: string): Array<number> {
    /**
     * Zuerst müssen wir die Form der Zahl aufräumen
     * Das heißt dass wir einfach die führenden Nullen wegmachen sollen
     */
    let _bignumber: string = `${bignumber}`;
    let _numericalIdx = 0;
    let _lookahead = true;
    let _digits = [];
    if (
      _bignumber.charAt(0) === Signum.MINUS ||
      _bignumber.charAt(0) === Signum.PLUS
    ) {
      _numericalIdx = 1;
    }
    for (let idx = _numericalIdx; idx < _bignumber.length; idx++) {
      let _digit = parseInt(_bignumber[idx]);
      if (!_digit && _lookahead) continue;
      _digits.push(_digit);
      /**
       * Damit sollte es nur einmal stattfinden
       * With this, it should happen only once
       */
      if (_lookahead) _lookahead = false;
    }
    return _digits;
  }

  /**
   * Public method to return the signum of the number
   */
  public getSignum(): Signum {
    return this._sign;
  }
}
