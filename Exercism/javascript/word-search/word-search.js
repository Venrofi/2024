class WordSearch {
	constructor(grid = []) {
		this.grid = grid;
		this.columnGrid = [];

		for (let i = 0; i < this.grid[0].length; i++) {
			for (let j = 0; j < this.grid.length; j++) {
				if (this.columnGrid[i]) {
					this.columnGrid[i] += this.grid[j][i];
				} else {
					this.columnGrid[i] = this.grid[j][i];
				}
			}
		}
	}

	find(words = []) {
		const result = {};

		words.forEach((word) => {
			const reversedWord = word.split("").reverse().join("");
			result[word] = undefined;

			// horizontal
			for (const [index, row] of this.grid.entries()) {
				// right to left
				if (row.includes(word)) {
					result[word] = {
						start: [index + 1, row.indexOf(word) + 1],
						end: [index + 1, row.indexOf(word) + word.length],
					};
				}

				// left to right
				if (row.includes(reversedWord)) {
					result[word] = {
						start: [index + 1, row.indexOf(reversedWord) + word.length],
						end: [index + 1, row.indexOf(reversedWord) + 1],
					};
				}
			}

			// vertical
			for (const [index, column] of this.columnGrid.entries()) {
				// top to bottom
				if (column.includes(word)) {
					result[word] = {
						start: [column.indexOf(word) + 1, index + 1],
						end: [index + 1, column.indexOf(word) + word.length],
					};
				}

				// bottom to top
				if (column.includes(reversedWord)) {
					result[word] = {
						start: [column.indexOf(reversedWord) + word.length, index + 1],
						end: [column.indexOf(reversedWord) + 1, index + 1],
					};
				}
			}

			// Top-left to bottom-right & reverse
			for (let row = 0; row <= this.grid.length - word.length; row++) {
				for (let col = 0; col <= this.grid[0].length - word.length; col++) {
					const currentCharacter = this.grid[row][col];

					let match = currentCharacter === word[0];
					let reverseMatch = currentCharacter === reversedWord[0];

					for (let i = 0; i < word.length; i++) {
						if (!match && !reverseMatch) break;

						if (this.grid[row + i][col + i] !== word[i]) match = false;
						if (this.grid[row + i][col + i] !== reversedWord[i]) reverseMatch = false;
					}

					if (match) {
						result[word] = {
							start: [row + 1, col + 1],
							end: [row + word.length, col + word.length],
						};
						break;
					}

					if (reverseMatch) {
						result[word] = {
							start: [row + word.length, col + word.length],
							end: [row + 1, col + 1],
						};
						break;
					}
				}
			}

			// Top-right to bottom-left & reverse
			for (let row = 0; row <= this.grid.length - word.length; row++) {
				for (let col = word.length - 1; col < this.grid[0].length; col++) {
					const currentCharacter = this.grid[row][col];

					let match = currentCharacter === word[0];
					let reverseMatch = currentCharacter === reversedWord[0];

					for (let i = 0; i < word.length; i++) {
						if (!match && !reverseMatch) break;

						if (this.grid[row + i][col - i] !== word[i]) match = false;
						if (this.grid[row + i][col - i] !== reversedWord[i]) reverseMatch = false;
					}

					if (match) {
						result[word] = {
							start: [row + 1, col + 1],
							end: [row + word.length, col - word.length + 2],
						};
						break;
					}

					if (reverseMatch) {
						result[word] = {
							start: [row + word.length, col - word.length + 2],
							end: [row + 1, col + 1],
						};
						break;
					}
				}
			}
		});

		return result;
	}
}

export default WordSearch;
