export class Change {
  calculate(coinArray = [], target = 0) {
    const availableCoins = coinArray.toReversed();
    const changeOptions = [];

    if (target === 0) {
      return [];
    }

    if (target < 0) {
      throw new Error('Negative totals are not allowed.');
    }

    if (target < coinArray[0]) {
      throw new Error(`The total ${target} cannot be represented in the given currency.`)
    }

    for (let i = 0; i < availableCoins.length; i++) {
      const change = this.getChange(availableCoins.slice(i), target);

      if (change.length > 0) {
        changeOptions.push(change);
      }
    }

    if (changeOptions.length === 0) {
      throw new Error(`The total ${target} cannot be represented in the given currency.`);
    }

    return changeOptions.reduce((min, change) => change.length < min.length ? change : min, changeOptions[0]);
  }

  getChange(coinArray = [], target = 0) {
    const change = [];
    let targetValue = target;

    for (const coin of coinArray) {
      while (targetValue >= coin) {
        change.push(coin);
        targetValue -= coin;
      }
    }

    return targetValue === 0 ? change.reverse() : [];
  }
}
