export const isIsogram = (word = "") => {
	const normalizedWordLetters = word.toLowerCase().replace(/ |-/g, "").split("");
	const noDuplicateLetters = new Set(normalizedWordLetters);

	return normalizedWordLetters.length === noDuplicateLetters.size;
};
