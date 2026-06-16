// BEGIN
const symbols = {
  usd: '$',
  eur: '€',
};

const exchangeRates = {
  usd: { eur: 0.7, usd: 1 },
  eur: { usd: 1.2, eur: 1 },
};

export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(currency) {
  return new Money(this.value * exchangeRates[this.currency][currency], currency);
};

Money.prototype.add = function add(money) {
  const converted = money.exchangeTo(this.currency);
  return new Money(this.value + converted.getValue(), this.currency);
};

Money.prototype.format = function format() {
  return `${symbols[this.currency]}${this.value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
// END
