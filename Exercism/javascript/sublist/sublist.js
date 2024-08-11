export class List {
	constructor(values = []) {
		this.values = [...values];
	}

	compare(anotherList) {
		const listA = this.values;
		const listB = anotherList.values;

		if (listA.length > listB.length) {
			if (listB.length === 0) return "SUPERLIST";

			let superlist = false;

			for (let i = 0; i <= listA.length - listB.length; i++) {
				const fragment = listA.slice(i, i + listB.length);

				if (fragment.toString() === listB.toString()) {
					superlist = true;
					break;
				}
			}

			return superlist ? "SUPERLIST" : "UNEQUAL";
		}

		if (listA.length < listB.length) {
			if (listA.length === 0) return "SUBLIST";

			let sublist = false;

			for (let i = 0; i <= listB.length - listA.length; i++) {
				const fragment = listB.slice(i, i + listA.length);

				if (fragment.toString() === listA.toString()) {
					sublist = true;
					break;
				}
			}

			return sublist ? "SUBLIST" : "UNEQUAL";
		}

		let listsEquality = listA.every((value, index) => value === listB[index]);

		return listsEquality ? "EQUAL" : "UNEQUAL";
	}
}
