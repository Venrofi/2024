export const primeFactors = (number) => {
	const factors = [];
	let currentFactor = 2;
	let currentNumber = number;

	while (currentNumber !== 1) {
		if (currentNumber % currentFactor === 0) {
			factors.push(currentFactor);
			currentNumber /= currentFactor;
		} else {
			currentFactor += 1;
		}

		if (currentFactor > number) {
			break;
		}
	}

	return factors;
};
