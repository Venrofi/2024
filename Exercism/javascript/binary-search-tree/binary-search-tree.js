export class BinarySearchTree {
	constructor(startValue = 0) {
		this._data = startValue;
		this._left = null;
		this._right = null;
	}

	get data() {
		return this._data;
	}
	get right() {
		return this._right;
	}

	get left() {
		return this._left;
	}

	insert(value) {
		if (value <= this._data) {
			if (this._left === null) {
				this._left = new BinarySearchTree(value);
			} else {
				this._left.insert(value);
			}
		} else {
			if (this._right === null) {
				this._right = new BinarySearchTree(value);
			} else {
				this._right.insert(value);
			}
		}
	}

	each(callback) {
		if (this._left !== null) {
			this._left.each(callback);
		}

		callback(this._data);

		if (this._right !== null) {
			this._right.each(callback);
		}
	}
}
