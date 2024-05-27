export class Node {
	constructor(value, prev, next) {
		this.value = value;
		this.prev = prev;
		this.next = next;
	}
}

const insert = (prev, value, next) => {
	const current = new Node(value, prev, next);

	prev.next = current;
	next.prev = current;
};

const remove = (prev, current, next) => {
	prev.next = current.next;
	next.prev = current.prev;

	return current.value;
};

export class LinkedList {
	constructor() {
		this.head = new Node();
		this.tail = new Node();

		this.head.prev = this.tail;
		this.head.next = this.tail;
		this.tail.prev = this.head;
		this.tail.next = this.head;

		this.size = 0;
	}

	push(value) {
		insert(this.tail.prev, value, this.tail);
		this.size += 1;
	}

	pop() {
		this.size -= 1;
		return remove(this.tail.prev.prev, this.tail.prev, this.tail);
	}

	shift() {
		this.size -= 1;
		return remove(this.head, this.head.next, this.head.next.next);
	}

	unshift(value) {
		insert(this.head, value, this.head.next);
		this.size += 1;
	}

	delete(value) {
		let current = this.head.next;

		while (current && current.value) {
			if (current.value == value) {
				remove(current.prev, current, current.next);
				this.size -= 1;
				break;
			}
			current = current.next;
		}
	}

	count() {
		return this.size;
	}
}
