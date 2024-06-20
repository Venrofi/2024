export class Squares {
	constructor(number = 1) {
		this.n = number;
	}

	get sumOfSquares() {
		let sum = 0;

		for (let i = 1; i <= this.n; i++) {
			sum += i ** 2;
		}

		return sum;
	}

	get squareOfSum() {
		const sum = (this.n * (this.n + 1)) / 2;

		return sum ** 2;
	}

	get difference() {
		return this.squareOfSum - this.sumOfSquares;
	}
}
