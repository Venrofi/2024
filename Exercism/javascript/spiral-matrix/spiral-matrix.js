export const spiralMatrix = (size = 0) => {
	const matrix = Array.from({ length: size }, () => Array(size).fill(0));

	let top = 0,
		bottom = size - 1;
	let left = 0,
		right = size - 1;

	let value = 1;

	while (top <= bottom && left <= right) {
		for (let i = left; i <= right; i++) {
			matrix[top][i] = value++;
		}
		top += 1;

		for (let i = top; i <= bottom; i++) {
			matrix[i][right] = value++;
		}
		right -= 1;

		if (top <= bottom) {
			for (let i = right; i >= left; i--) {
				matrix[bottom][i] = value++;
			}
			bottom -= 1;
		}

		if (left <= right) {
			for (let i = bottom; i >= top; i--) {
				matrix[i][left] = value++;
			}
			left += 1;
		}
	}

	return matrix;
};
