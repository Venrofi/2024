export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [],
    white: [whiteRow, whiteColumn] = [],
  } = {}) {
    this.white = [whiteRow, whiteColumn];
    this.black = [blackRow, blackColumn];

    if (whiteRow === undefined && whiteColumn === undefined) {
      this.white = [7, 3];
    }

    if (blackRow === undefined && blackColumn === undefined) {
      this.black = [0, 3];
    }

    if (!this.isPositionValid(this.white) || !this.isPositionValid(this.black)) {
      throw new Error('Queen must be placed on the board');
    }

    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
      throw new Error('Queens cannot share the same space');
    }
  }

  toString() {
    const [whiteRow, whiteColumn] = this.white;
    const [blackRow, blackColumn] = this.black;

    const board = Array(8).fill(null).map(() => Array(8).fill('_'));

    board[whiteRow][whiteColumn] = 'W';
    board[blackRow][blackColumn] = 'B';

    return board.map(r => r.join(' ')).join('\n');
  }

  get canAttack() {
    const [whiteRow, whiteColumn] = this.white;
    const [blackRow, blackColumn] = this.black;

    if (whiteRow === blackRow || whiteColumn === blackColumn) {
      return true;
    }

    const directions = ['NW', 'NE', 'SW', 'SE'];

    for (let direction of directions) {
      let row = whiteRow;
      let col = whiteColumn;

      while (this.isPositionValid([row, col])) {
        switch (direction) {
          case 'NW':
            row -= 1;
            col -= 1;
            break;
          case 'SW':
            row += 1;
            col -= 1;
            break;
          case 'NE':
            row -= 1;
            col += 1;
            break;
          case 'SE':
            row += 1;
            col += 1;
            break;
          default:
            row = -1;
            col = -1;
            break;
        }

        if (row === blackRow && col === blackColumn) {
          return true;
        }
      }
    }

    return false;
  }

  isPositionValid([row, column] = []) {
    return (row >= 0 && row <= 7) && (column >= 0 && column <= 7);
  }
}
