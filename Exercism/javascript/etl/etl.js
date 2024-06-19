export const transform = (legacyPoints = {}) => {
	const newPointsSystem = {};

	for (const [pointsValue, letters] of Object.entries(legacyPoints)) {
		letters.forEach((letter) => {
			newPointsSystem[letter.toLowerCase()] = Number(pointsValue);
		});
	}

	return newPointsSystem;
};
