export const encode = (values) => {
	const result = [];

	values.forEach((value) => {
		const bytes = [];

		do {
			let byte = value & 0x7f;
			value >>>= 7;

			if (bytes.length > 0) byte |= 0x80;

			bytes.unshift(byte);
		} while (value);

		result.push(...bytes);
	});

	return result;
};

export const decode = (bytes) => {
	const result = [];
	let sequence = 0;
	let currentByte = 0;

	bytes.forEach((byte) => {
		if (sequence) currentByte <<= 7;

		currentByte |= byte & 0x7f;

		if (byte & 0x80) {
			sequence += 1;
		} else {
			result.push(currentByte >>> 0);
			currentByte = sequence = 0;
		}
	});

	if (sequence) throw new Error("Incomplete sequence");

	return result;
};
