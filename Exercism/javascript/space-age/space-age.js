const RATIO = {
	mercury: 0.2408467,
	venus: 0.61519726,
	earth: 1,
	mars: 1.8808158,
	jupiter: 11.862615,
	saturn: 29.447498,
	uranus: 84.016846,
	neptune: 164.79132,
};

const earthYearInSeconds = 31557600;

const roundedAge = (age) => Math.round(age * 100) / 100;

export const age = (planet, ageInSeconds) => {
	return roundedAge(ageInSeconds / (earthYearInSeconds * RATIO[planet]));
};
