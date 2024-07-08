const NUMBER_PATTERNS = {
	" _ | ||_|": "0",
	"     |  |": "1",
	" _  _||_ ": "2",
	" _  _| _|": "3",
	"   |_|  |": "4",
	" _ |_  _|": "5",
	" _ |_ |_|": "6",
	" _   |  |": "7",
	" _ |_||_|": "8",
	" _ |_| _|": "9",
};

export const convert = (input) => {
	const rows = input.split("\n");
	let result = "";

	for (let blockIndex = 0; blockIndex < rows.length; blockIndex += 4) {
		if (blockIndex > 0) {
			result += ",";
		}

		for (let column = 0; column < rows[blockIndex].length; column += 3) {
			const digitPattern = rows
				.slice(blockIndex, blockIndex + 3)
				.map((row) => row.slice(column, column + 3))
				.join("");

			result += NUMBER_PATTERNS[digitPattern] || "?";
		}
	}

	return result;
};
