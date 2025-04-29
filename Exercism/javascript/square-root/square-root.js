export const squareRoot = (number = 1) => {
  if (number === 1) return 1;

  const limit = Math.floor(number / 2);

  for (let i = 0; i <= limit; i++) {
    if (i * i === number) {
      return i;
    }
  }

  return 0;
};
