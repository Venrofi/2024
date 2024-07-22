export class House {
	static NOUNS = [
		"house that Jack built.",
		"malt",
		"rat",
		"cat",
		"dog",
		"cow with the crumpled horn",
		"maiden all forlorn",
		"man all tattered and torn",
		"priest all shaven and shorn",
		"rooster that crowed in the morn",
		"farmer sowing his corn",
		"horse and the hound and the horn",
	];

	static VERBS = [
		"lay in",
		"ate",
		"killed",
		"worried",
		"tossed",
		"milked",
		"kissed",
		"married",
		"woke",
		"kept",
		"belonged to",
	];
	static verse(n = 1) {
		let verse = [`This is the ${this.NOUNS[n - 1]}`];

		for (let i = n - 2; i >= 0; i--) {
			verse.push(`that ${this.VERBS[i]} the ${this.NOUNS[i]}`);
		}

		return verse;
	}

	static verses(start = 1, end = 1) {
		let result = [];

		for (let i = start; i <= end; i++) {
			result.push(...this.verse(i));

			if (i !== end) {
				result.push("");
			}
		}

		return result;
	}
}
