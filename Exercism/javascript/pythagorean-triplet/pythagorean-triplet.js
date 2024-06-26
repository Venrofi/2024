export function triplets({ minFactor = 0, maxFactor, sum }) {
	let a, b, c;
	const result = [];
	c = maxFactor || Math.floor(sum / 2);

	while (c > 2) {
		for (let i = c - 1; i > 0; i--) {
			b = i;
			for (let j = b - 1; j > minFactor; j--) {
				a = j;

				if (a * a + b * b === c * c && a + b + c === sum) {
					result.push(new Triplet(a, b, c));
				}
			}
		}
		c -= 1;
	}

	return result;
}

class Triplet {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	toArray() {
		return [this.a, this.b, this.c];
	}
}
