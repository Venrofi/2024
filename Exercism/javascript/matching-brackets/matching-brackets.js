export const isPaired = (input = "") => {
	const regex = /[[\]{}()]/g;
	const foundBrackets = input.match(regex);

	if (!foundBrackets) {
		return true;
	}

	const stack = [];
	const matchingBrackets = {
		"(": ")",
		"{": "}",
		"[": "]",
	};

	for (const bracket of foundBrackets) {
		if (matchingBrackets[bracket]) {
			// If it's an opening bracket, push it to the stack
			stack.push(bracket);
		} else {
			// If it's a closing bracket, check if it matches the last opened bracket
			const lastOpenedBracket = stack.pop();
			if (matchingBrackets[lastOpenedBracket] !== bracket) {
				return false;
			}
		}
	}

	// If the stack is empty, all opening brackets were properly matched
	return stack.length === 0;
};
