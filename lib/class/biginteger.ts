// import { BigIntegerCompare } from "./operations/compare";
// import { Switch } from "./operations/switch";
import { Signum } from './constants/signs';
import Errors from './constants/errors';

export class BigInteger {
  private readonly ZERO: number = 0;
  private readonly REGEX: RegExp = /(^[-|+]?[0-9]+$)/;
  /**
   * What do we require to be able to describe a big number?
   * Basically an array in which we can place every digit of it.
   *
   * Was benötigen wir um eine riesige Nummer beschreiben zu können?
   * Eigentlich ein Array, in das wir jede Ziffer deren setzen können.
   */
  private _original: string;
  private _digits: Array<number>;
  private _sign: Signum;

  /**
   * Some more properties for quicker comparisions
   * Ein paar mehrere Eigenschaften zu schnelleren Vergleichen
   */
  private _isNegative: boolean = false;
  private _isEven = false;

  constructor(candidate: string) {
    if (!this.REGEX.test(candidate)) {
      /**
       * An error is encountered
       * Es ist ein Fehler aufgetreten
       */
      throw new Error(Errors.FORMAT_INCORRECT);
    }
    // What to do in a default case when we want to have a big integer with no input?
    this._original = candidate; // Save the original

    // Set the sign and negativity here
    this._sign = this._extractSign();
    if (this._sign === Signum.MINUS) this._isNegative = true;

    this._digits = this._extractDigits();
    this._isEven = this._digits[this._digits.length] % 2 === 0;
  }

  /**
   * Return the sign of the number
   */
  private _extractSign(): Signum {
    /**
     * Here the sign of the huge number entered is returned after an examination
     * Hier wird das Signum der riesigen eingegebenen Nummer nach einer einfachen Untersuchung zurückgeworfen
     */
    if (!this._original) return Signum.NULL;
    return this._original.charAt(0) === Signum.MINUS
      ? Signum.MINUS
      : Signum.PLUS;
  }

  /**
   * Return the number cleaned and arranged as a list
   */
  private _extractDigits(): Array<number> {
    let digits: Array<number> = [];
    let leading: boolean = true;
    /**
     * A bit of cleanup: remove the leading zeroes :D
     * Ein bisschen Aufräumung: Einfach weg mit den führenden Nullen :D
     */
    for (let $idx = 0; $idx < this._original.length; $idx++) {
      let char: string = this._original[$idx];
      if (!/[0-9]/.test(char)) continue;
      let digit = parseInt(char, 10);
      if (digit !== 0) leading = false;
      else if (!digit && !leading) leading = false;
      if (leading) continue;
      digits.push(digit);
    }

    if (!digits.length) digits.push(this.ZERO);
    return digits;
  }

  /**
   * Public method to return the signum of the number
   */
  public getSign(): Signum {
    return this._sign;
  }

  /**
   * Public method to return whether the number is negative
   */
  public isNegative(): boolean {
    return this._isNegative;
  }

  /**
   * Public method to return whether the number is even
   */
  public isEven(): boolean {
    return this._isEven;
  }

  /**
   * Method to return the stored number in a cleaner form with correct sign
   */
  public toString(): string {
    let sign = this._sign === Signum.MINUS ? '-' : '';
    // With the cleaned up zeroes
    return `${sign}${this._digits.join('')}`;
  }
}
