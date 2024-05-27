//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
	constructor() {
		this.schoolRoster = {};
	}

	roster() {
		const grades = Object.keys(this.schoolRoster);

		grades.forEach((grade) => {
			this.schoolRoster[grade] = this.grade(grade);
		});

		return structuredClone(this.schoolRoster);
	}

	add(student, grade) {
		const grades = Object.keys(this.schoolRoster);
		let nameTaken = false;

		grades.forEach((exisitingGrade) => {
			nameTaken = Object.values(this.schoolRoster[exisitingGrade]).includes(student);

			if (nameTaken) {
				this.schoolRoster[exisitingGrade] = Object.values(
					this.schoolRoster[exisitingGrade]
				).filter((name) => name !== student);
			}
		});

		if (this.schoolRoster[grade]) {
			this.schoolRoster[grade] = [...Object.values(this.schoolRoster[grade]), student];
		} else {
			this.schoolRoster[grade] = [student];
		}
	}

	grade(value) {
		if (!this.schoolRoster[value]) return [];

		return Object.values(this.schoolRoster[value]).sort();
	}
}
