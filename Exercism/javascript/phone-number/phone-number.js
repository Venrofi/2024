export const clean = (input = "") => {
	const regex = /[0-9]/g;
	const number = input.match(regex);

	if (input.match(/[a-z]/g)) {
		throw new Error("Letters not permitted");
	}

	if (input.match(/[@:!]/g)) {
		throw new Error("Punctuations not permitted");
	}

	if (number.length > 11) {
		throw new Error("More than 11 digits");
	}

	if (number.length < 10) {
		throw new Error("Incorrect number of digits");
	}

	if (number.length === 11) {
		if (number[0] !== "1") {
			throw new Error("11 digits must start with 1");
		}

		number.shift();
	}

	if (number[0] === "0") {
		throw new Error("Area code cannot start with zero");
	}

	if (number[0] === "1") {
		throw new Error("Area code cannot start with one");
	}

	if (number[3] === "0") {
		throw new Error("Exchange code cannot start with zero");
	}

	if (number[3] === "1") {
		throw new Error("Exchange code cannot start with one");
	}

	return number.join("");
};
