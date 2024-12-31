export const sum = (magicalItems, level) => {
  const multiples = magicalItems.flatMap((item) => {
    if (item === 0) return item;

    return Array.from({ length: Math.floor((level - 1) / item) }, (_, i) => (i + 1) * item);
  });

  const uniqueMultiples = [...new Set(multiples)];

  return uniqueMultiples.reduce((a, b) => a + b, 0);
};
