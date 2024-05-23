export class Matrix {
	constructor(input) {
		this.rows = [];
		this.columns = [];

		input.split("\n").forEach((line, index) => {
			const values = line.split(" ").map((value) => Number(value));

			this.rows.push(values);

			if (index === 0) {
				values.forEach((value) => {
					this.columns.push([value]);
				});
			} else {
				values.forEach((value, index) => {
					this.columns[index].push(value);
				});
			}
		});
	}
}
