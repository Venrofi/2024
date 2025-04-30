const ADJACENTS = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, 0],
  [1, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1]
];

export const annotate = (input = []) => {
  let board = input.map(row => row.split(''));

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] === '*') continue;

      board[row][col] = countMine(board, row, col);
    }
  }

  return board.map(row => row.join(''));
};

function countMine(board, x, y) {
  const count = ADJACENTS.filter(([a, b]) => board[x + a] && board[x + a][y + b] && board[x + a][y + b] === '*').length;

  return count ? count : ' ';
}
