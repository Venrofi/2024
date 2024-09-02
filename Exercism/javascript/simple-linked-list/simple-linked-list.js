export class Element {
	constructor(value) {
		this._value = value;
		this._next = null;
	}

	get value() {
		return this._value;
	}

	get next() {
		return this._next;
	}

	set next(element) {
		this._next = element;
	}
}

export class List {
	constructor(values = []) {
		this._head = null;
		this.size = 0;

		values.forEach((value) => {
			this.add(new Element(value));
		});
	}

	add(nextValue) {
		if (this.head === null) {
			this._head = nextValue;
		} else {
			let oldHead = this.head;

			this._head = nextValue;
			this.head.next = oldHead;
		}

		this.size += 1;
	}

	get length() {
		return this.size;
	}

	get head() {
		return this._head;
	}

	toArray() {
		let values = [];
		let element = this.head;

		while (element !== null) {
			values.push(element.value);
			element = element.next;
		}

		return values;
	}

	reverse() {
		return new List(this.toArray());
	}
}
