export class Rational {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	add(anotherRational) {
		const newA = this.a * anotherRational.b + anotherRational.a * this.b;
		const newB = this.b * anotherRational.b;

		const divisor = greatestCommonDivisor(newA, newB);

		return new Rational(newA / divisor, newB / divisor);
	}

	sub(anotherRational) {
		const newA = this.a * anotherRational.b - anotherRational.a * this.b;
		const newB = this.b * anotherRational.b;

		const divisor = greatestCommonDivisor(newA, newB);

		return new Rational(newA / divisor, newB / divisor);
	}

	mul(anotherRational) {
		const newA = this.a * anotherRational.a;
		const newB = this.b * anotherRational.b;

		const divisor = greatestCommonDivisor(newA, newB);

		return new Rational(newA / divisor, newB / divisor);
	}

	div(anotherRational) {
		if (anotherRational.a === 0) throw new Error("Cannot divide by 0!");

		const newA = this.a * anotherRational.b;
		const newB = this.b * anotherRational.a;

		return new Rational(newA, newB).reduce();
	}

	abs() {
		if (this.a < 0) {
			this.a *= -1;
		}

		if (this.b < 0) {
			this.b *= -1;
		}

		return this;
	}

	exprational(n = 1) {
		const newA = this.a ** n;
		const newB = this.b ** n;

		return new Rational(newA, newB).reduce();
	}

	expreal(n = 1) {
		return Math.fround(n ** (this.a / this.b));
	}

	reduce() {
		if (this.b < 0) {
			this.a *= -1;
			this.b *= -1;
		}

		const divisor = greatestCommonDivisor(this.a, this.b);

		this.a /= divisor;
		this.b /= divisor;

		return this;
	}
}

function greatestCommonDivisor(a, b) {
	if (a < 0) {
		a *= -1;
	}

	if (b < 0) {
		b *= -1;
	}

	if (b === 0) {
		return a;
	} else {
		return greatestCommonDivisor(b, a % b);
	}
}
