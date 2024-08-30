export const find = (searchArray, value) => {
	let startIndex = 0;
	let endIndex = searchArray.length - 1;

	while (startIndex <= endIndex) {
		const middleIndex = Math.floor((startIndex + endIndex) / 2);

		if (searchArray[middleIndex] === value) {
			return middleIndex;
		} else if (searchArray[middleIndex] > value) {
			endIndex = middleIndex - 1;
		} else {
			startIndex = middleIndex + 1;
		}
	}

	throw new Error("Value not in array");
};
