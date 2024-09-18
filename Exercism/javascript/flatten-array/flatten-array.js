export const flatten = (array = []) => {
	const flattenedArray = [];

	for (const element of array) {
		if (element === null) continue;

		if (typeof element === "object") {
			const nestedElements = flatten(element);
			flattenedArray.push(...nestedElements);
		} else {
			flattenedArray.push(element);
		}
	}

	return flattenedArray;
};
