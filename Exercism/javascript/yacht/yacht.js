export const score = (dice = [], category = "") => {
	switch (category) {
		case "yacht": {
			return dice.every((val) => val === dice[0]) ? 50 : 0;
		}
		case "ones": {
			return dice.filter((val) => val === 1).length;
		}
		case "twos": {
			return dice.filter((val) => val === 2).length * 2;
		}
		case "threes": {
			return dice.filter((val) => val === 3).length * 3;
		}
		case "fours": {
			return dice.filter((val) => val === 4).length * 4;
		}
		case "fives": {
			return dice.filter((val) => val === 5).length * 5;
		}
		case "sixes": {
			return dice.filter((val) => val === 6).length * 6;
		}
		case "full house": {
			const uniqueValues = new Set(dice);

			if (uniqueValues.size !== 2) return 0;

			let result = 0;

			uniqueValues.forEach((value) => {
				const numberOfOccurances = dice.filter((v) => v === value).length;

				if (![2, 3].includes(numberOfOccurances)) return 0;

				result += numberOfOccurances * value;
			});

			return result;
		}
		case "four of a kind": {
			const uniqueValues = new Set(dice);

			if (uniqueValues.size > 2) return 0;

			let result = 0;

			for (let value of uniqueValues) {
				const numberOfOccurances = dice.filter((v) => v === value).length;

				if (numberOfOccurances >= 4) {
					result = value * 4;
					break;
				} else {
					result = 0;
				}
			}

			return result;
		}
		case "little straight": {
			return dice.sort().every((val, index) => val === index + 1) ? 30 : 0;
		}
		case "big straight": {
			return dice.sort().every((val, index) => val === index + 2) ? 30 : 0;
		}
		case "choice": {
			return dice.reduce((acc, val) => (acc += val), 0);
		}
		default: {
			return 0;
		}
	}
};
