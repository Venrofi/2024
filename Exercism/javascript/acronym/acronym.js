export const parse = (phrase = "") => {
	return phrase
		.split(/\s|_|-/)
		.map((word) => word[0] && word[0].toUpperCase())
		.join("");
};
