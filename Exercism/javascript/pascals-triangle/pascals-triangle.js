export const rows = (count) => {
	const pascalsTriangle = [];

	for (let i = 0; i < count; i++) {
		pascalsTriangle[i] = [];

		for (let j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				pascalsTriangle[i][j] = 1;
			} else {
				pascalsTriangle[i][j] = pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j];
			}
		}
	}

	return pascalsTriangle;
};
