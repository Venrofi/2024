export class Board {
	constructor(board) {
		this.board = board.map((element) => element.replaceAll(" ", ""));
		this.transposedBoard = [];

		this.board.forEach((row) => {
			for (let i = 0; i < row.length; i++) {
				if (this.transposedBoard[i]) {
					this.transposedBoard[i] += row[i];
				} else {
					this.transposedBoard.push(row[i]);
				}
			}
		});
	}

	winner() {
		let winner = "";

		if (this.board.flat().length === 1) {
			return this.board[0];
		}

		// Possible O winner
		if (this.board.every((row) => row.includes("O"))) {
			const startIndexes = this.board[0]
				.split("")
				.map((char, i) => (char === "O" ? i : undefined))
				.filter((i) => i !== undefined);

			for (let start of startIndexes) {
				winner = this.validatePath(start, this.board, "O");

				if (winner) break;
			}
		}

		if (winner) return winner;

		// Possible X winner
		if (this.transposedBoard.every((column) => column.includes("X"))) {
			const startIndexes = this.transposedBoard[0]
				.split("")
				.map((char, i) => (char === "X" ? i : undefined))
				.filter((i) => i !== undefined);

			for (let start of startIndexes) {
				winner = this.validatePath(start, this.transposedBoard, "X");

				if (winner) break;
			}
		}

		return winner;
	}

	validatePath(startPosition = 0, board = [], winningCharacter = "X") {
		let position = startPosition;
		let row = 0;
		let brokenConnection = false;
		let winner = winningCharacter;

		while (row !== board.length - 1 && !brokenConnection) {
			const currentRowIndexes = board[row]
				.split("")
				.map((char, i) => (char === winningCharacter ? i : undefined))
				.filter((i) => i !== undefined);

			const nextRowIndexes = board[row + 1]
				.split("")
				.map((char, i) => (char === winningCharacter ? i : undefined))
				.filter((i) => i !== undefined);

			if (nextRowIndexes.includes(position)) {
				row += 1;
			} else if (nextRowIndexes.includes(position - 1)) {
				row += 1;
				position -= 1;
			} else if (nextRowIndexes.includes(position + 1)) {
				row += 1;
				position += 1;
			} else if (currentRowIndexes.includes(position - 1)) {
				position -= 1;
			} else if (currentRowIndexes.includes(position + 1)) {
				position += 1;
			} else {
				brokenConnection = true;
				winner = "";
			}
		}

		return winner;
	}
}
