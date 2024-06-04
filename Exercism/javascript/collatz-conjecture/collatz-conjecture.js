export const steps = (number) => {
	let count = 0;

	if (!Number(number) || number <= 0) {
		throw new Error("Only positive numbers are allowed");
	}

	while (number !== 1) {
		if (number % 2 === 0) {
			number /= 2;
		} else {
			number = number * 3 + 1;
		}
		count += 1;
	}

	return count;
};
