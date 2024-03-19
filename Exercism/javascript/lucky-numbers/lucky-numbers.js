// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
	let numberOne = array1.join("");
	let numberTwo = array2.join("");

	while (numberOne[0] === "0") {
		numberOne = numberOne.slice(1);
	}

	while (numberTwo[0] === "0") {
		numberTwo = numberTwo.slice(1);
	}

	return Number(numberOne) + Number(numberTwo);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
	const stringValue = String(value);
	const reversedValue = stringValue.split("").reverse().join("");

	return stringValue === reversedValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
	if (!input) return "Required field";

	console.log(Number(input));

	if (!Number(input) || input === "0") return "Must be a number besides 0";

	return "";
}
