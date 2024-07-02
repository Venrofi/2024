export class Scale {
	constructor(tonic = "C") {
		this.tonic = tonic;
		this.startingNote = tonic[0].toUpperCase() + tonic.slice(1);

		this.sharpScale = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
		this.flatScale = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
		this.sharpExpression = [
			"C",
			"a",
			"G",
			"D",
			"A",
			"E",
			"B",
			"F#",
			"e",
			"b",
			"f#",
			"c#",
			"g#",
			"d#",
		];
	}

	chromatic() {
		const scale = this.sharpExpression.includes(this.tonic) ? this.sharpScale : this.flatScale;
		const startIndex = scale.findIndex((sharp) => sharp === this.startingNote);
		const result = [];

		for (let i = 0; i < 12; i++) {
			result.push(scale[(startIndex + i) % 12]);
		}

		return result;
	}

	interval(intervals = "") {
		const scale = this.sharpExpression.includes(this.tonic) ? this.sharpScale : this.flatScale;
		let index = scale.findIndex((sharp) => sharp === this.startingNote);
		const result = [scale[index]];

		intervals.split("").forEach((interval) => {
			switch (interval) {
				case "A":
					index += 3;
					break;
				case "M":
					index += 2;
					break;
				case "m":
					index += 1;
					break;
			}

			result.push(scale[index % 12]);
		});

		return result;
	}
}
