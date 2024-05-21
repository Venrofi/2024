const GIGA = 10 ** 12;

export const gigasecond = (currentDate) => {
	return new Date(currentDate.getTime() + GIGA);
};
