export const solve = (puzzle = "") => {
	const puzzleSumElements = puzzle
		.split(" ")
		.filter((element) => element !== "+" && element !== "==");
	const letters = [
		...new Set(puzzle.split("").filter((char) => ![" ", "+", "="].includes(char))),
	];
	const nonZeroLetters = [...new Set(puzzleSumElements.map((element) => element[0]))];

	// Function to generate permutations of digits for specific letters
	const permuteDigits = (digits, length) => {
		if (length === 0) return [[]];

		const result = [];

		for (let i = 0; i < digits.length; i++) {
			const restPermutations = permuteDigits(
				digits.slice(0, i).concat(digits.slice(i + 1)),
				length - 1
			);
			for (let perm of restPermutations) {
				result.push([digits[i], ...perm]);
			}
		}
		return result;
	};

	// Function to check if a given mapping is valid
	const isAdditionValid = (terms, sum) => terms.reduce((acc, value) => (acc += value), 0) === sum;

	const digitPermutations = permuteDigits([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], letters.length);

	for (let perm of digitPermutations) {
		const result = {};

		for (let i = 0; i < letters.length; i++) {
			result[letters[i]] = perm[i]; // Map letters with current permutation digits
		}

		// Skip this permutation if any non-zero letters are assigned a zero
		if (nonZeroLetters.some((letter) => result[letter] === 0)) {
			continue;
		}

		const testSumElements = puzzleSumElements.map((element) =>
			Number(
				element
					.split("")
					.map((letter) => result[letter])
					.join("")
			)
		);

		if (
			isAdditionValid(
				testSumElements.slice(0, -1),
				testSumElements[testSumElements.length - 1]
			)
		) {
			console.log("Valid result found:", result);
			return result;
		}
	}

	console.log("No valid result found");
	return null;
};
