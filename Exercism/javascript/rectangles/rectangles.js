export function count(diagram) {
	let squares = 0;

	for (let column = 0; column < diagram.length; column++) {
		for (let row = 0; row < diagram[0].length; row++) {
			if (diagram[column][row] !== "+") continue;

			for (let nextRow = row + 1; nextRow < diagram[0].length; nextRow++) {
				if (diagram[column][nextRow] !== "+") continue;

				for (let nextColumn = column + 1; nextColumn < diagram.length; nextColumn++) {
					if (
						"+|".includes(diagram[nextColumn][row]) &&
						"+|".includes(diagram[nextColumn][nextRow])
					) {
						if (
							diagram[nextColumn][row] === "+" &&
							diagram[nextColumn][nextRow] === "+"
						) {
							squares += 1;
						}
					} else break;
				}
			}
		}
	}

	return squares;
}
