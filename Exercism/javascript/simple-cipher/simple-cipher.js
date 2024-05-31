export class Cipher {
	constructor(key = "abcdefghijklmnopqrstuvwxyz") {
		this._key = key;
	}

	encode(text) {
		return text
			.split("")
			.map((letter, index) => {
				// Convert the character to a zero-based index (0 for 'a', 1 for 'b', etc.)
				const letterIndex = letter.charCodeAt(0) - 97;

				// Get the corresponding character from the key and convert it to a zero-based index
				const keyIndex = this._key[index % this._key.length].charCodeAt(0) - 97;

				// Calculate the new character index by adding the key index and wrapping around using modulo 26
				const newLetterIndex = (letterIndex + keyIndex) % 26;

				return String.fromCharCode(newLetterIndex + 97);
			})
			.join("");
	}

	decode(text) {
		return text
			.split("")
			.map((letter, index) => {
				// Convert the character to a zero-based index (0 for 'a', 1 for 'b', etc.)
				let letterIndex = letter.charCodeAt(0) - 97;

				// Get the corresponding character from the key and convert it to a zero-based index
				let keyIndex = this._key[index % this._key.length].charCodeAt(0) - 97;

				// Calculate the new character index by subtracting the key index and wrapping around using modulo 26
				let newLetterIndex = letterIndex - keyIndex;

				if (newLetterIndex < 0) {
					newLetterIndex += 26;
				}

				return String.fromCharCode(newLetterIndex + 97);
			})
			.join("");
	}

	get key() {
		return this._key;
	}
}
