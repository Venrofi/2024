export class CustomSet {
	constructor(startValues) {
		this._data = startValues ? [...startValues] : [];
	}

	empty() {
		return this._data.length === 0;
	}

	contains(value) {
		return Boolean(this._data.find((element) => element === value));
	}

	add(value) {
		if (!this.contains(value)) {
			this._data.push(value);
		}

		return this;
	}

	subset(anotherSet) {
		return this._data.every((value) => anotherSet.contains(value));
	}

	disjoint(anotherSet) {
		return this._data.every((value) => !anotherSet.contains(value));
	}

	eql(anotherSet) {
		if (this._data.length !== anotherSet._data.length) {
			return false;
		}

		return this._data.every((value) => anotherSet.contains(value));
	}

	union(anotherSet) {
		const newSet = new CustomSet(this._data);

		anotherSet._data.forEach((value) => newSet.add(value));

		return newSet;
	}

	intersection(anotherSet) {
		const sharedValues = this._data.filter((value) => anotherSet.contains(value));
		return new CustomSet(sharedValues);
	}

	difference(anotherSet) {
		const uniqueValues = this._data.filter((value) => !anotherSet.contains(value));
		return new CustomSet(uniqueValues);
	}
}
