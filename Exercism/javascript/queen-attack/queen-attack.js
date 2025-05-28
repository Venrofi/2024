export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    this.white = [whiteRow, whiteColumn];
    this.black = [blackRow, blackColumn];

    if (!this.isPositionValid(this.white) || !this.isPositionValid(this.black)) {
      throw new Error('Queen must be placed on the board');
    }

    if (whiteRow === blackRow && whiteColumn === blackColumn) {
      throw new Error('Queens cannot share the same space');
    }
  }

  toString() {
    const [whiteRow, whiteColumn] = this.white;
    const [blackRow, blackColumn] = this.black;

    const board = Array(8).fill(null).map(() => Array(8).fill('_'));

    board[whiteRow][whiteColumn] = 'W';
    board[blackRow][blackColumn] = 'B';

    return board.map(row => row.join(' ')).join('\n');
  }

  get canAttack() {
    const [whiteRow, whiteColumn] = this.white;
    const [blackRow, blackColumn] = this.black;

    return whiteRow === blackRow || whiteColumn === blackColumn || Math.abs(whiteRow - blackRow) === Math.abs(whiteColumn - blackColumn);
  }

  isPositionValid([row, column] = []) {
    return (row >= 0 && row <= 7) && (column >= 0 && column <= 7);
  }
}
