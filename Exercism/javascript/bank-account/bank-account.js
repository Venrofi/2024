export class BankAccount {
	constructor() {
		this._balance = 0;
		this._open = false;
	}

	open() {
		if (this._open) throw new ValueError();

		this._open = true;

		return this;
	}

	close() {
		if (!this._open) throw new ValueError();

		this._open = false;
		this._balance = 0;

		return this;
	}

	deposit(amount) {
		if (!this._open || amount < 0) throw new ValueError();

		this._balance += amount;

		return this;
	}

	withdraw(amount) {
		if (!this._open || this._balance < amount || amount < 0) throw new ValueError();

		this._balance -= amount;

		return this;
	}

	get balance() {
		if (!this._open) throw new ValueError();

		return this._balance;
	}
}

export class ValueError extends Error {
	constructor() {
		super("Bank account error");
	}
}
