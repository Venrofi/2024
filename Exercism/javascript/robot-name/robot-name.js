export class Robot {
	#name;

	constructor() {
		this.reset();
	}

	get name() {
		return this.#name;
	}

	reset() {
		let newName = generateName();

		while (USED_NAMES.has(newName)) {
			newName = generateName();
		}

		USED_NAMES.add(newName);
		this.#name = newName;

		return this;
	}
}

const USED_NAMES = new Set();

function randomNumber(range) {
	return Math.floor(Math.random() * range);
}

function generateName() {
	const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
	let name = "";

	name = letters[randomNumber(letters.length)] + letters[randomNumber(letters.length)];
	name += randomNumber(10);
	name += randomNumber(10);
	name += randomNumber(10);

	return name;
}

Robot.releaseNames = () => {
	USED_NAMES.clear();
};
