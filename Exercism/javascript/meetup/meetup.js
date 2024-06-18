const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const WEEKS = ["first", "second", "third", "fourth"];

export const meetup = (year, month, week, weekday) => {
	let date = new Date(year, month, 0);

	switch (week) {
		case "teenth": {
			for (let i = 13; i <= 19; i++) {
				date.setDate(i);

				if (WEEKDAYS[date.getDay()] === weekday) {
					return date;
				}
			}
			break;
		}
		case "last": {
			for (let day = date.getDate(); day > 0; day--) {
				date.setDate(day);

				if (WEEKDAYS[date.getDay()] === weekday) {
					return date;
				}
			}
			break;
		}
		default: {
			for (let day = 1; day <= 31; day++) {
				date.setDate(day);

				const weekOffset = 7 * WEEKS.indexOf(week);

				if (WEEKDAYS[date.getDay()] === weekday) {
					date.setDate(weekOffset + day);
					return date;
				}
			}
		}
	}

	return date;
};
