export const isArmstrongNumber = (number) => {
  const digits = number.toString().split('');
  const sum = digits.reduce((sum, value) => sum + BigInt(value) ** BigInt(digits.length), 0n);

  return BigInt(number) === sum;
};
