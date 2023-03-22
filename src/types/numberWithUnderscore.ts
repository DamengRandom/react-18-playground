export class AmountInput {
  MAX_ALLOWED: number = 1_000_000;

  amount: number = 10;

  formatNumber() {
    return "$" + this.amount / this.MAX_ALLOWED;
  }
}

const amountInputClass = new AmountInput();

console.log(amountInputClass.formatNumber());
// In typescript, you can write number as 1000000 as 1_000_000, which is more readable

// especially can be used for setTimeout time setup, eg: 3_000
