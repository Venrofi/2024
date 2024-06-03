const OPERATORS = ["plus", "minus", "multiplied", "divided"];

export const answer = (question = "") => {
	const words = question
		.slice(0, -1)
		.split(" ")
		.slice(2)
		.filter((word) => word !== "by"); // filter question mark, first two words ("What is") and the word "by"

	let result = 0;
	let number, operator;

	words.forEach((word) => {
		if (!Number(word)) {
			if (!OPERATORS.includes(word)) {
				throw new Error("Unknown operation");
			}

			if (operator || result === 0) {
				throw new Error("Syntax error");
			}

			operator = word;
		}

		if (Number(word)) {
			if (result === 0) {
				result = Number(word);
			} else {
				if (!operator) {
					throw new Error("Syntax error");
				}
				number = Number(word);
			}
		}

		if (number && operator) {
			switch (operator) {
				case "plus":
					result += number;
					break;

				case "minus":
					result -= number;
					break;

				case "multiplied":
					result *= number;
					break;

				case "divided":
					result /= number;
					break;

				default:
					throw new Error("Unknown operation");
			}

			number = undefined;
			operator = undefined;
		}
	});

	if ((result !== 0 && operator && !number) || words.length === 0) {
		throw new Error("Syntax error");
	}

	return result;
};
