export const decodedValue = ([firstColor, secondColor]) => {
	return Number(COLORS.indexOf(firstColor).toString() + COLORS.indexOf(secondColor).toString());
};

export const COLORS = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white",
];
