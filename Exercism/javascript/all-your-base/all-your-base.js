export const convert = (sequence = [], base = 2, newBase = 10) => {
  if (base <= 1) {
    throw new Error('Wrong input base');
  }

  if (newBase <= 1) {
    throw new Error('Wrong output base');
  }

  if (sequence.length === 0
      || !sequence.every(digit => digit >= 0)
      || sequence.some(digit => digit >= base)
      || (sequence[0] === 0 && sequence.length > 1)) {
    throw new Error('Input has wrong format');
  }

  const newSequence = [];
  let base10 = sequence.reduce((sum, value, index) => sum + value * base ** (sequence.length - index - 1), 0);

  if (base10 === 0) {
    return [0];
  }

  while (base10 > 0) {
    newSequence.unshift(base10 % newBase);
    base10 = Math.floor(base10 / newBase);
  }

  return newSequence;
};
