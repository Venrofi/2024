class CircularBuffer {
	constructor(size) {
		this.size = size;
		this.buffer = [];
	}

	write(value) {
		if (this.buffer.length === this.size) throw new BufferFullError();

		this.buffer.push(value);
	}

	read() {
		if (this.buffer.length === 0) throw new BufferEmptyError();

		return this.buffer.shift();
	}

	forceWrite(value) {
		if (this.buffer.length < this.size) {
			this.buffer.push(value);
		} else {
			this.buffer.shift();
			this.buffer.push(value);
		}
	}

	clear() {
		this.buffer = [];
		return this;
	}
}

export default CircularBuffer;

export class BufferFullError extends Error {
	constructor() {
		super("Buffer is full!");
	}
}

export class BufferEmptyError extends Error {
	constructor() {
		super("Buffer is empty!");
	}
}
