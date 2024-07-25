export const recite = (start, end) => {
	const christmasDays = {
		1: "first",
		2: "second",
		3: "third",
		4: "fourth",
		5: "fifth",
		6: "sixth",
		7: "seventh",
		8: "eighth",
		9: "ninth",
		10: "tenth",
		11: "eleventh",
		12: "twelfth",
	};

	const giftNames = {
		1: "a Partridge in a Pear Tree",
		2: "two Turtle Doves",
		3: "three French Hens",
		4: "four Calling Birds",
		5: "five Gold Rings",
		6: "six Geese-a-Laying",
		7: "seven Swans-a-Swimming",
		8: "eight Maids-a-Milking",
		9: "nine Ladies Dancing",
		10: "ten Lords-a-Leaping",
		11: "eleven Pipers Piping",
		12: "twelve Drummers Drumming",
	};

	let lyrics = "";
	let verse = start;

	if (!end) end = start;

	while (verse <= end) {
		lyrics += `On the ${christmasDays[verse]} day of Christmas my true love gave to me:`;

		const gifts = Object.values(giftNames).slice(1, verse).reverse().join(", ");

		if (gifts) lyrics += ` ${gifts}`;

		if (verse > 1) lyrics += `, and`;

		lyrics += ` ${giftNames[1]}.\n`;
		if (verse !== end) lyrics += "\n";

		verse += 1;
	}

	return lyrics;
};
