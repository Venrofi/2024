export const largestProduct = (input = "", span = 0) => {
	if (span <= 0) {
		throw new Error("Span must be greater than zero");
	}

	if (input.length < span) {
		throw new Error("Span must be smaller than string length");
	}

	if (/[^0-9]/g.test(input)) {
		throw new Error("Digits input must only contain digits");
	}

	const numbers = input.split("").map((n) => Number(n));
	const seriesProducts = [];

	for (let i = 0; i + span <= numbers.length; i += 1) {
		const product = numbers.slice(i, i + span).reduce((acc, val) => (acc *= val), 1);
		seriesProducts.push(product);
	}

	return Math.max(...seriesProducts);
};
