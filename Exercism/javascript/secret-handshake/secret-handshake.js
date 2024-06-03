const ACTIONS = ["wink", "double blink", "close your eyes", "jump"];

export const commands = (number) => {
	const binaryNumber = number.toString(2).split("").reverse();
	const actions = [];

	binaryNumber.forEach((num, index) => {
		if (num === "0") return;

		if (index === 4) {
			actions.reverse();
		} else {
			actions.push(ACTIONS[index]);
		}
	});

	return actions;
};
