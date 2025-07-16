export const annotate = (input = []) => {
  if (input.length === 0) return [];

  const rowLength = input.length;
  const columnLength = input[0].length;

  let output = input.map(row => row.split(''));

  for (let row = 0; row < rowLength; row += 1) {
    for (let column = 0; column < columnLength; column += 1) {
      if (output[row][column] === '*') continue;

      output[row][column] = countFlowers(input, row, column);
    }
  }

  return output.map(row => row.join(''));
};

const countFlowers = (field, x, y) => {
  let count = 0;

  if (field?.[x - 1]?.[y - 1] === '*') count += 1;
  if (field?.[x - 1]?.[y] === '*') count += 1;
  if (field?.[x - 1]?.[y + 1] === '*') count += 1;

  if (field?.[x + 1]?.[y - 1] === '*') count += 1;
  if (field?.[x + 1]?.[y] === '*') count += 1;
  if (field?.[x + 1]?.[y + 1] === '*') count += 1;

  if (field?.[x]?.[y - 1] === '*') count += 1;
  if (field?.[x]?.[y + 1] === '*') count += 1;

  return count > 0 ? count.toString() : ' ';
}
