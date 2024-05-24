const setDiscountPrice = {
	5: 5 * 800 * 0.75,
	4: 4 * 800 * 0.8,
	3: 3 * 800 * 0.9,
	2: 2 * 800 * 0.95,
	1: 800,
	0: 0,
};

export const cost = (books) => {
	let booksSet = [];

	while (books.length > 0) {
		booksSet.push(new Set(books).size);

		new Set(books).forEach((elem) => {
			books.splice(books.indexOf(elem), 1);
		});
	}

	// If there's set of 3 & set of 5, change it to two sets of 4's to gain better discount!
	while (booksSet.includes(3) && booksSet.includes(5)) {
		booksSet.splice(booksSet.indexOf(3), 1);
		booksSet.splice(booksSet.indexOf(5), 1);
		booksSet.push(4, 4);
	}

	return booksSet.reduce((total, set) => (total += setDiscountPrice[set]), 0);
};
