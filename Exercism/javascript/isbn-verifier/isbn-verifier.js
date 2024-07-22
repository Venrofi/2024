export const isValid = (input = "") => {
	const numbers = input.replaceAll("-", "").split("");

	if (numbers.length !== 10) {
		return false;
	}

	if (numbers[9] === "X") {
		numbers[9] = 10;
	}

	const multiplier = 10;
	const checksum = numbers.reduce((acc, val, index) => (acc += val * (multiplier - index)), 0);

	return checksum % 11 === 0;
};
