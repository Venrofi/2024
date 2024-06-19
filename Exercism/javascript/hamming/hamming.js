export const compute = (strandA = "", strandB = "") => {
	let distance = 0;

	if (strandA.length !== strandB.length) {
		throw new Error("strands must be of equal length");
	}

	strandA.split("").forEach((cell, index) => {
		if (cell !== strandB[index]) {
			distance += 1;
		}
	});

	return distance;
};
