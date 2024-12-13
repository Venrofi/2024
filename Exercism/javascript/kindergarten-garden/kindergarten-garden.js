const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.rows = diagram.split('\n');
    this.students = students.sort();
  }

  plants(student) {
    const studentIndex = this.students.indexOf(student);
    let result = [];

    this.rows.forEach((row) => {
      const rowPlants = row.slice(studentIndex * 2, studentIndex * 2 + 2).split("").map((plant) => { return PLANT_CODES[plant]});

      result.push(...rowPlants);
    });

    return result;
  }
}
