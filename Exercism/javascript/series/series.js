export class Series {
	constructor(series) {
		if (series.length === 0) {
			throw new Error("series cannot be empty");
		}

		this.series = series;
	}

	slices(sliceLength) {
		const seriesElements = this.series.split("").map((element) => Number(element));
		const result = [];

		if (sliceLength > seriesElements.length) {
			throw new Error("slice length cannot be greater than series length");
		}

		if (sliceLength === 0) {
			throw new Error("slice length cannot be zero");
		}

		if (sliceLength < 0) {
			throw new Error("slice length cannot be negative");
		}

		for (let i = 0; i + sliceLength <= seriesElements.length; i += 1) {
			result.push(seriesElements.slice(i, i + sliceLength));
		}

		return result;
	}
}
