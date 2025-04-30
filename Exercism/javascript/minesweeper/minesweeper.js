export const annotate = (input = []) => {
  let output = input.map(row => row.split(''));
  const numRows = input.length;

  for (let row = 0; row < numRows; row++) {
    const numCols = input[row]?.length;

    for (let col = 0; col < numCols; col++) {
      if (input[row][col] === '*') continue;

      let count = 0;

      if (row > 0) {
        if (input[row - 1][col] === '*') {
          count += 1;
        }

        if (col < numCols - 1 && input[row - 1][col + 1] === '*') {
          count += 1;
        }

        if (col > 0 && input[row - 1][col - 1] === '*') {
          count += 1;
        }
      }

      if (row < numRows - 1) {
        if (input[row + 1][col] === '*') {
          count += 1;
        }

        if (col < numCols - 1 && input[row + 1][col + 1] === '*') {
          count += 1;
        }

        if (col > 0 && input[row + 1][col - 1] === '*') {
          count += 1;
        }
      }

      if (col > 0 && input[row][col - 1] === '*') {
        count += 1;
      }

      if (col < numCols - 1 && input[row][col + 1] === '*') {
        count += 1;
      }

      output[row][col] = count > 0 ? count.toString() : ' ';
    }
  }

  return output.map(row => row.join(''));
};
