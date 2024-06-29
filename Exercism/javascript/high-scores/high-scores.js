export class HighScores {
	constructor(input = []) {
		this._scores = input;
	}

	get scores() {
		return this._scores;
	}

	get latest() {
		const index = this._scores.length - 1;

		return this._scores[index];
	}

	get personalBest() {
		const sortedScores = this._scores.sort((a, b) => b - a);

		return sortedScores[0];
	}

	get personalTopThree() {
		const sortedScores = this._scores.sort((a, b) => b - a);

		return sortedScores.slice(0, 3);
	}
}
