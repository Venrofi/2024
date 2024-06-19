const PUNCTUATION = [".", "\n", "?", ":", ",", "!", "&", "@", "$", "%", "^", "&"];

export const countWords = (text = "") => {
	const result = {};
	let formattedText = text.toLocaleLowerCase();

	PUNCTUATION.forEach((element) => {
		formattedText = formattedText.replaceAll(element, " ");
	});

	formattedText = formattedText
		.split(" ")
		.filter((word) => word.length > 0)
		.map((word) => {
			if (word.startsWith("'") && word.endsWith("'")) {
				return word.slice(1, word.length - 1);
			}

			return word;
		});

	for (const word of formattedText) {
		result[word] = result[word] ? (result[word] += 1) : 1;
	}

	return result;
};
