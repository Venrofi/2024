export class Triangle {
	constructor(...sides) {
		this.a = sides[0];
		this.b = sides[1];
		this.c = sides[2];

		this.isTriangle =
			this.a + this.b >= this.c &&
			this.b + this.c >= this.a &&
			this.a + this.c >= this.b &&
			[this.a, this.b, this.c].every((side) => side > 0);
	}

	get isEquilateral() {
		return this.isTriangle && this.a === this.b && this.a === this.c && this.b === this.c;
	}

	get isIsosceles() {
		return this.isTriangle && (this.a === this.b || this.b === this.c || this.a === this.c);
	}

	get isScalene() {
		return this.isTriangle && this.a !== this.b && this.b !== this.c && this.a !== this.c;
	}
}
