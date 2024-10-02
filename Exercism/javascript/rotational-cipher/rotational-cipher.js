export const rotate = (input = "", rotation = 0) => {
	return input
		.split("")
		.map((char) => {
			const n = char.charCodeAt(0);
			const isUppercaseLetter = n >= FIRST_UPPERCASE_LETTER && n <= LAST_UPPERRCASE_LETTER;
			const isLowercaseLetter = n >= FIRST_LOWERCASE_LETTER && n <= LAST_LOWERCASE_LETTER;

			let shiftedChar = n + rotation;

			if (isUppercaseLetter) {
				if (shiftedChar > LAST_UPPERRCASE_LETTER)
					shiftedChar = shiftedChar - LAST_UPPERRCASE_LETTER + FIRST_UPPERCASE_LETTER - 1;
				if (shiftedChar < FIRST_UPPERCASE_LETTER)
					shiftedChar = shiftedChar - FIRST_UPPERCASE_LETTER + LAST_UPPERRCASE_LETTER - 1;

				return String.fromCharCode(shiftedChar);
			} else if (isLowercaseLetter) {
				if (shiftedChar > LAST_LOWERCASE_LETTER)
					shiftedChar = shiftedChar - LAST_LOWERCASE_LETTER + FIRST_LOWERCASE_LETTER - 1;
				if (shiftedChar < FIRST_LOWERCASE_LETTER)
					shiftedChar = shiftedChar - FIRST_LOWERCASE_LETTER + LAST_LOWERCASE_LETTER - 1;

				return String.fromCharCode(shiftedChar);
			} else {
				return char;
			}
		})
		.join("");
};

const FIRST_LOWERCASE_LETTER = 97;
const LAST_LOWERCASE_LETTER = 122;
const FIRST_UPPERCASE_LETTER = 65;
const LAST_UPPERRCASE_LETTER = 90;
