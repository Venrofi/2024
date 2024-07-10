export const saddlePoints = (data) => {
	const foundSpots = [];
	let column = 0;

	for (let row = 0; row < data.length; row++) {
		const maxRowHeight = Math.max(...data[row]);

		while (column <= data[row].length) {
			const columnHeights = [];

			for (let i = 0; i < data.length; i++) {
				columnHeights.push(data[i][column]);
			}

			const minColumnHeight = Math.min(...columnHeights);

			if (minColumnHeight === maxRowHeight) {
				foundSpots.push({ row: row + 1, column: column + 1 });
			}
			column += 1;
		}

		column = 0;
	}

	return foundSpots;
};
