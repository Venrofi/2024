export const hey = (message) => {
	const defaultResponse = "Whatever.";

	// silence messages (whitespace)
	if (message.length === 0 || message.trim().length === 0) return "Fine. Be that way!";

	// question
	if (message.trim().endsWith("?")) {
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
