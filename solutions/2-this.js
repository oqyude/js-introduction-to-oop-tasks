// BEGIN
const make = (numer = 0, denom = 1) => ({
  numer,
  denom,
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  setNumer(value) {
    this.numer = value;
  },
  setDenom(value) {
    this.denom = value;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
  add(rational) {
    const resultNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom();
    const resultDenom = this.getDenom() * rational.getDenom();
    return make(resultNumer, resultDenom);
  },
});

export default make;
// END
