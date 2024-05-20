export const hey = (message) => {
	const defaultResponse = "Whatever.";

	message = message.trim();

	// silence messages (whitespace)
	if (!message) return "Fine. Be that way!";

	// question
	if (message.endsWith("?")) {
		// yelling question
		if (message.toUpperCase() !== message.toLowerCase() && message.toUpperCase() === message)
			return "Calm down, I know what I'm doing!";

		return "Sure.";
	}

	// no letters
	if (message.toUpperCase() === message.toLowerCase()) return defaultResponse;

	// yelling
	if (message.toUpperCase() === message) return "Whoa, chill out!";

	return defaultResponse;
};
