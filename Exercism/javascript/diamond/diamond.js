export const rows = (letter = "A") => {
	if (letter === "A") return ["A"];

	const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const halfDiamondHeight = ALPHABET.indexOf(letter);
	const halfDiamond = [];

	for (let i = 0; i < halfDiamondHeight; i++) {
		const sidePadding = halfDiamondHeight - i;
		const middlePadding = halfDiamondHeight - sidePadding + i - 1;

		let row = " ".repeat(sidePadding);

		if (i === 0) {
			row += ALPHABET[i];
		} else {
			row += ALPHABET[i] + " ".repeat(middlePadding) + ALPHABET[i];
		}

		row += " ".repeat(sidePadding);

		halfDiamond.push(row);
	}

	const middleRowPadding = halfDiamond[0].length - 2;
	const middleRow =
		ALPHABET[halfDiamond.length] + " ".repeat(middleRowPadding) + ALPHABET[halfDiamond.length];

	const diamondUpperHalf = [...halfDiamond];
	const diamondLowerHalf = [...halfDiamond.reverse()];

	return [...diamondUpperHalf, middleRow, ...diamondLowerHalf];
};
