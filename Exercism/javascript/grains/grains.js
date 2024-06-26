export const square = (number = 1) => {
	if (number > 64 || number < 1) {
		throw new Error("square must be between 1 and 64");
	}

	return BigInt(2) ** BigInt(number - 1);
};

export const total = () => {
	return BigInt(2) ** BigInt(64) - BigInt(1);
};
