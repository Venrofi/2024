export const valid = (input = "") => {
	const normalizedInput = input.replaceAll(" ", "");
	const onlyNumbersRegex = /^[0-9]+$/;
	const numbers = [];

	if (normalizedInput.length <= 1 || !onlyNumbersRegex.test(normalizedInput)) {
		return false;
	}

	normalizedInput.split("").forEach((element) => {
		numbers.push(Number(element));
	});

	for (let i = numbers.length - 2; i >= 0; i -= 2) {
		numbers[i] *= 2;

		if (numbers[i] > 9) {
			numbers[i] -= 9;
		}
	}

	return numbers.reduce((acc, value) => (acc += value), 0) % 10 === 0;
};
