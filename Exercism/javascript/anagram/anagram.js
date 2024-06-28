export const findAnagrams = (targetWord = "", candidateWords = []) => {
	const anagrams = [];
	const normalizedTargetWord = targetWord.toLowerCase();

	candidateWords.forEach((word) => {
		let normalizedWord = word.toLowerCase();

		if (
			normalizedWord !== normalizedTargetWord &&
			normalizedWord.length === normalizedTargetWord.length
		) {
			const normalizedWordLetters = normalizedWord.split("");

			if (
				normalizedWordLetters.every(
					(letter) =>
						normalizedTargetWord.split(letter).length ===
						normalizedWord.split(letter).length
				)
			) {
				anagrams.push(word);
			}
		}
	});

	return anagrams;
};
