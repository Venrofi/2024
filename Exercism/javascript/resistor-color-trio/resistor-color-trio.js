export class ResistorColorTrio {
	constructor(input = []) {
		this.colorBands = {
			black: 0,
			brown: 1,
			red: 2,
			orange: 3,
			yellow: 4,
			green: 5,
			blue: 6,
			violet: 7,
			grey: 8,
			white: 9,
		};

		if (!input.every((value) => this.colorBands[value] !== undefined)) {
			throw new Error("invalid color");
		}

		const decodedColors = input
			.slice(0, 2)
			.map((value) => this.colorBands[value])
			.join("");

		const numberOfZeros = this.colorBands[input.pop()];

		this.value = decodedColors.padEnd(2 + numberOfZeros, "0");
	}

	get label() {
		if (this.value % 1000 === 0) {
			return `Resistor value: ${this.value / 1000} ${"kiloohms"}`;
		} else {
			return `Resistor value: ${this.value} ${"ohms"}`;
		}
	}
}
