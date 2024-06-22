export class ComplexNumber {
	constructor(a = 0, b = 0) {
		this.a = a;
		this.b = b;
	}

	get real() {
		return this.a;
	}

	get imag() {
		return this.b;
	}

	add(anotherCompexNumber) {
		this.a += anotherCompexNumber.real;
		this.b += anotherCompexNumber.imag;

		return this;
	}

	sub(anotherCompexNumber) {
		this.a -= anotherCompexNumber.real;
		this.b -= anotherCompexNumber.imag;

		return this;
	}

	div(anotherCompexNumber) {
		const squareSum = anotherCompexNumber.a ** 2 + anotherCompexNumber.b ** 2;
		const newA = (this.a * anotherCompexNumber.a + this.b * anotherCompexNumber.b) / squareSum;
		const newB = (this.b * anotherCompexNumber.a - this.a * anotherCompexNumber.b) / squareSum;

		this.a = newA;
		this.b = newB;

		return this;
	}

	mul(anotherCompexNumber) {
		const newA = this.a * anotherCompexNumber.a - this.b * anotherCompexNumber.b;
		const newB = this.b * anotherCompexNumber.a + this.a * anotherCompexNumber.b;

		this.a = newA;
		this.b = newB;

		return this;
	}

	get abs() {
		return Math.sqrt(this.a ** 2 + this.b ** 2);
	}

	get conj() {
		if (this.b !== 0) {
			this.b *= -1;
		}

		return this;
	}

	get exp() {
		const realE = Math.exp(this.a);
		const cosImag = Math.cos(this.b);
		const sinImag = Math.sin(this.b);

		this.a = realE * cosImag;
		this.b = realE * sinImag;

		return this;
	}
}
