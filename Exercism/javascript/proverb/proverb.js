export const proverb = (...input) => {
	let result = "";

	input.forEach((word, index) => {
		if (index === input.length - 1) {
			const ending = typeof word === "object" ? `${word.qualifier} ${input[0]}` : input[0];

			result += `And all for the want of a ${ending}.`;
		} else {
			if (typeof input[index + 1] === "object") return;

			result += `For want of a ${word} the ${input[index + 1]} was lost.` + "\n";
		}
	});

	return result;
};
