const SCORING_SYSTEM = {
	1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
	2: ["D", "G"],
	3: ["B", "C", "M", "P"],
	4: ["F", "H", "V", "W", "Y"],
	5: ["K"],
	8: ["J", "X"],
	10: ["Q", "Z"],
};

export const score = (word = "") => {
	const formattedWord = word.toUpperCase();
	let scrabbleScore = 0;

	for (const letter of formattedWord) {
		for (const value in SCORING_SYSTEM) {
			if (SCORING_SYSTEM[value].includes(letter)) {
				scrabbleScore += Number(value);
			}
		}
	}

	return scrabbleScore;
};
