export class List {
	constructor(values = []) {
		this.values = values;
	}

	append(list) {
		this.values = [...this.values, ...list.values] || [];
		return this;
	}

	concat(lists) {
		lists.values.forEach((list) => {
			this.values = this.append(list).values;
		});

		return this;
	}

	filter(callback) {
		let filteredValues = [];

		this.values.forEach((value) => {
			if (callback(value)) {
				filteredValues = [...filteredValues, value];
			}
		});

		this.values = filteredValues;

		return this;
	}

	map(callback) {
		let mappedValues = [];

		this.values.forEach((value) => {
			mappedValues = [...mappedValues, callback(value)];
		});

		this.values = mappedValues;

		return this;
	}

	length() {
		return this.foldl((length) => length + 1, 0);
	}

	foldl(callback, startValue) {
		let acc = startValue;

		this.values.forEach((value) => {
			acc = callback(acc, value);
		});

		return acc;
	}

	foldr(callback, startValue) {
		let acc = startValue;

		for (let i = this.values.length - 1; i >= 0; i--) {
			acc = callback(acc, this.values[i]);
		}

		return acc;
	}

	reverse() {
		let reversedValues = [];

		for (let i = this.values.length - 1; i >= 0; i--) {
			reversedValues = [...reversedValues, this.values[i]];
		}

		this.values = reversedValues;

		return this;
	}
}
