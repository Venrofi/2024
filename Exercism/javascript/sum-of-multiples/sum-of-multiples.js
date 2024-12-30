export const sum = (magicalItems, level) => {
  let multiples = [];

  magicalItems.forEach((item) => {
    if (item === 0) {
      multiples.push(item);
      return;
    }

    for (let i = item; i < level; i += item) {
      multiples.push(i);
    }
  });

  const uniqueMultiples = [...new Set(multiples)];

  return uniqueMultiples.reduce((a, b) => a + b, 0);
};
