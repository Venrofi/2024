export const translate = (input = "") => {
	const VOWELS = ["a", "e", "i", "o", "u"];

	const words = input.split(" ");
	const result = [];

	words.forEach((word) => {
		if (VOWELS.includes(word[0]) || word.startsWith("xr") || word.startsWith("yt")) {
			result.push(word + "ay");
			return;
		}

		let rearrangedWord = word;

		while (!VOWELS.includes(rearrangedWord[0]) && !rearrangedWord.startsWith("qu")) {
			if (rearrangedWord.startsWith("y") && !word.startsWith("y")) break; // treat 'y' as a vowel if not at the start of the original word

			let consonant = rearrangedWord.slice(0, 1);
			rearrangedWord = rearrangedWord.slice(1 - rearrangedWord.length) + consonant;
		}

		if (rearrangedWord.startsWith("qu")) {
			rearrangedWord = rearrangedWord.slice(2 - rearrangedWord.length) + "quay";
		} else {
			rearrangedWord += "ay";
		}

		result.push(rearrangedWord);
	});

	return result.join(" ");
};
