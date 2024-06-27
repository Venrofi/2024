export class Palindromes {
	constructor() {}

	static generate({ maxFactor, minFactor }) {
		if (maxFactor < minFactor) {
			throw new Error("min must be <= max");
		}

		let smallest, largest;

		smallest = largest = {
			value: null,
			factors: [],
		};

		for (let i = minFactor; i <= maxFactor; i++) {
			for (let j = minFactor; j <= maxFactor; j++) {
				const product = i * j;
				const productStr = product.toString();
				const reversedProduct = productStr.split("").reverse().join("");

				if (productStr !== reversedProduct) {
					continue;
				}

				if (smallest.value === null || product < smallest.value) {
					smallest = { value: product, factors: [[i, j]] };
				} else if (
					product === smallest.value &&
					!smallest.factors.find(([a, b]) => a + b === i + j)
				) {
					smallest.factors.push([i, j]);
				}

				if (largest.value === null || product > largest.value) {
					largest = { value: product, factors: [[i, j]] };
				} else if (
					product === largest.value &&
					!largest.factors.find(([a, b]) => a + b === i + j)
				) {
					largest.factors.push([i, j]);
				}
			}
		}

		this.largest = largest;
		this.smallest = smallest;

		return this;
	}
}
