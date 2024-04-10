// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
	const regex = /^chatbot/i; // ^ - starts with 'chatbot', /i case insensitive
	return regex.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
	return message.replace(/emoji[0-9]+/g, "");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
	const regex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;

	// Explanation of the regex:

	//   ^: Asserts the start of the string.
	//   \(: Matches the opening parenthesis ( literally.
	//   \+: Matches the plus sign + literally.
	//   \d{2}: Matches exactly two digits.
	//   \) : Matches the closing parenthesis ) literally.
	//   : Matches a space character.
	//   \d{3}: Matches exactly three digits.
	//   -: Matches the hyphen - literally.
	//   \d{3}: Matches exactly three digits.
	//   -: Matches the hyphen - literally.
	//   \d{3}: Matches exactly three digits.
	//   $: Asserts the end of the string.

	return regex.test(number)
		? "Thanks! You can now download me to your phone."
		: `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
	const regex = /\w+\.\w+/gi;

	// Explanation:

	//   \w+: Matches one or more word characters (letters, digits, or underscores).
	//   \.: Matches a dot character '.' literally.
	//   \w+: Matches one or more word characters (letters, digits, or underscores).

	return userInput.match(regex);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
	let [surname, name] = fullName.split(",");
	surname = surname.trim();
	name = name.trim();

	const text = "Nice to meet you, name surname";

	return text.replace(/name|surname/gi, (word) => {
		if (word === "name") return name;
		if (word === "surname") return surname;

		return word;
	});
}
