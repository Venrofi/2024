export const transpose = (input = []) => {
	if (input.length === 0) return [];

	const result = [];

	input.forEach((string, indexMargin) => {
		string.split("").forEach((character, i) => {
			result[i] = (result[i] || "").padEnd(indexMargin, " ") + character;
		});
	});

	return result;
};
