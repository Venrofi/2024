export const keep = (collection, callbackPredicate) => {
	const result = [];

	for (const element of collection) {
		if (callbackPredicate(element)) {
			result.push(element);
		}
	}

	return result;
};

export const discard = (collection, callbackPredicate) => {
	const result = [];

	for (const element of collection) {
		if (!callbackPredicate(element)) {
			result.push(element);
		}
	}

	return result;
};
