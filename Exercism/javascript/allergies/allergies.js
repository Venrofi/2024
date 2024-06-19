const KNOWN_ALLERGIES = [
	"eggs",
	"peanuts",
	"shellfish",
	"strawberries",
	"tomatoes",
	"chocolate",
	"pollen",
	"cats",
];

export class Allergies {
	constructor(score = 0) {
		this.score = score;
	}

	list() {
		let normalizedScore = this.score % 256;
		const allergies = [];

		for (let i = KNOWN_ALLERGIES.length; i >= 0; i--) {
			const knownAllergyScore = 2 ** i;

			if (normalizedScore >= knownAllergyScore) {
				allergies.push(KNOWN_ALLERGIES[i]);
				normalizedScore -= knownAllergyScore;
			}
		}

		return allergies.reverse();
	}

	allergicTo(item) {
		return this.list().includes(item);
	}
}
