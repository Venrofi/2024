export const say = (n) => {
	if (n < 0 || n > 999999999999) {
		throw new Error("Number must be between 0 and 999,999,999,999.");
	}

	let number = n;

	if (number === 0) return "zero";

	let result = "";

	while (number > 0) {
		// console.log(number, result);
		const digits = number.toString();
		result += result.length > 0 ? " " : "";

		if (number < 100) {
			result += translateSmallNumber(number);
			break;
		}

		if (number < 1000) {
			number = number % 100;
			result += `${TRANSLATIONS[digits[0]]} hundred`;
			continue;
		}

		if (number < 1000000) {
			let thousands = digits.slice(0, digits.length - 3);

			if (thousands.length === 3) {
				thousands =
					`${TRANSLATIONS[thousands[0]]} hundred ` +
					translateSmallNumber(thousands.slice(-2));
			} else {
				thousands = translateSmallNumber(thousands);
			}

			number = number % 1000;
			result += `${thousands} thousand`;
			continue;
		}

		if (number < 1000000000) {
			let millions = digits.slice(0, digits.length - 6);

			if (millions.length === 3) {
				millions =
					`${TRANSLATIONS[millions[0]]} hundred ` +
					translateSmallNumber(millions.slice(-2));
			} else {
				millions = translateSmallNumber(millions);
			}

			number = number % 1000000;
			result += `${millions} million`;
			continue;
		}

		if (number < 1000000000000) {
			let billions = digits.slice(0, digits.length - 9);

			if (billions.length === 3) {
				billions =
					`${TRANSLATIONS[billions[0]]} hundred ` +
					translateSmallNumber(billions.slice(-2));
			} else {
				billions = translateSmallNumber(billions);
			}

			number = number % 1000000000;
			result += `${billions} billion`;
			continue;
		}
	}

	return result;
};

const translateSmallNumber = (number) => {
	if (number < 10) {
		return TRANSLATIONS[number];
	}

	if (number < 20) {
		return TEEN_TRANSLATIONS[number];
	}

	if (number < 100) {
		const digits = number.toString();

		if (digits[1] !== "0") {
			return `${TENS_TRANSLATIONS[digits[0]]}-${TRANSLATIONS[digits[1]]}`;
		} else {
			return `${TENS_TRANSLATIONS[digits[0]]}`;
		}
	}

	return number;
};

const TRANSLATIONS = {
	0: "zero",
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
};

const TEEN_TRANSLATIONS = {
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
};

const TENS_TRANSLATIONS = {
	2: "twenty",
	3: "thirty",
	4: "forty",
	5: "fifty",
	6: "sixty",
	7: "seventy",
	8: "eighty",
	9: "ninety",
};
