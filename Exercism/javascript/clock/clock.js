export class Clock {
	constructor(hour = 0, minutes = 0) {
		this.hour = hour % 24;
		this.minutes = minutes % 60;

		this.#calculateTime(minutes);
	}

	#calculateTime(minutes) {
		const additionalHours = Math.floor(minutes / 60);
		let newHour = this.hour + additionalHours;

		let newMinutes = 60 + (minutes % 60);
		newHour = 24 + (newHour % 24);

		this.hour = newHour % 24;
		this.minutes = newMinutes % 60;
	}

	toString() {
		return `${this.hour}`.padStart(2, "0") + ":" + `${this.minutes}`.padStart(2, "0");
	}

	plus(value) {
		let newMinutes = this.minutes + value;

		this.#calculateTime(newMinutes);

		return this;
	}

	minus(value) {
		let newMinutes = this.minutes - value;

		this.#calculateTime(newMinutes);

		return this;
	}

	equals(anotherClock) {
		return this.toString() === anotherClock.toString();
	}
}
