export class Change {
  calculate(coinValues = [], targetAmount = 0) {
    if (targetAmount === 0) return [];
    if (targetAmount < 0) throw new Error('Negative totals are not allowed.');

    const minCoinsForAmount = Array(targetAmount + 1).fill(null);
    minCoinsForAmount[0] = [];

    for (const coin of coinValues) {
      for (let currentAmount = coin; currentAmount <= targetAmount; currentAmount++) {

        if (minCoinsForAmount[currentAmount - coin] !== null) {
          const newCombination = [...minCoinsForAmount[currentAmount - coin], coin];

          if (!minCoinsForAmount[currentAmount] || newCombination.length < minCoinsForAmount[currentAmount].length) {
            minCoinsForAmount[currentAmount] = newCombination;
          }
        }
      }
    }

    if (!minCoinsForAmount[targetAmount]) {
      throw new Error(`The total ${targetAmount} cannot be represented in the given currency.`);
    }

    return minCoinsForAmount[targetAmount];
  }
}
