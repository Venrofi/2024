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
		let time = "";

		if (this.hour < 10) {
			time += "0";
		}
		time += `${this.hour}:`;

		if (this.minutes < 10) {
			time += "0";
		}
		time += this.minutes;

		return time;
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
