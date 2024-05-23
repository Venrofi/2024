export const isPangram = (sentence) => {
	const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");

	sentence = sentence.toLowerCase();

	return allLetters.every((letter) => sentence.includes(letter));
};
