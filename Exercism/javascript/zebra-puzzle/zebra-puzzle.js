export class ZebraPuzzle {
  constructor() {
    this.COLORS = ['red', 'green', 'ivory', 'yellow', 'blue'];
    this.NATIONALITIES = ['Englishman', 'Spaniard', 'Ukrainian', 'Norwegian', 'Japanese'];
    this.DRINKS = ['coffee', 'tea', 'milk', 'orange juice', 'water'];
    this.PETS = ['dog', 'snails', 'fox', 'horse', 'zebra'];
    this.HOBBIES = ['dancing', 'painting', 'reading', 'football', 'chess']
  }

  waterDrinker() {
    const housePuzzle = this.solvePuzzle();

    return housePuzzle.find(house => house.drink === 'water').nationality;
  }

  zebraOwner() {
    const housePuzzle = this.solvePuzzle();

    return housePuzzle.find(house => house.nationality === 'Japanese').nationality;
  }

  solvePuzzle() {
    const colorPermutations = this.permute(this.COLORS).filter((colors) => colors[1] === 'blue' && colors.indexOf('green') === colors.indexOf('ivory') + 1);
    const nationalityPermutations = this.permute(this.NATIONALITIES).filter(nationalities => nationalities[0] === 'Norwegian');
    const drinkPermutations = this.permute(this.DRINKS).filter(drinks => drinks[2] === 'milk');
    const petPermutations = this.permute(this.PETS);
    const hobbyPermutations = this.permute(this.HOBBIES);

    for (const colors of colorPermutations) {
      for (const nationalities of nationalityPermutations) {
        if (nationalities.indexOf('Englishman') !== colors.indexOf('red')) continue;

        for (const drinks of drinkPermutations) {
          if (nationalities.indexOf('Ukrainian') !== drinks.indexOf('tea')) continue;
          if (colors.indexOf('green') !== drinks.indexOf('coffee')) continue;

          for (const pets of petPermutations) {
            if (nationalities.indexOf('Spaniard') !== pets.indexOf('dog')) continue;

            for (const hobbies of hobbyPermutations) {
              const houses = colors.map((color, index) => ({
                color,
                nationality: nationalities[index],
                drink: drinks[index],
                pet: pets[index],
                hobby: hobbies[index]
              }));

              if (this.isValidCombination(houses)) return houses;
            }
          }
        }
      }
    }

    throw new Error('No valid solution found');
  }

  isValidCombination(houses = []) {
    return houses.length === 5
        && houses.some(house => house.hobby === 'dancing' && house.pet === 'snails')
        && houses.some(house => house.hobby === 'painting' && house.color === 'yellow')
        && houses.some(house => house.hobby === 'football' && house.drink === 'orange juice')
        && houses.some(house => house.hobby === 'chess' && house.nationality === 'Japanese')
  }

  permute(arr) {
    if (arr.length <= 1) return [arr];

    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const rest = arr.filter((_, idx) => idx !== i);

      for (const perm of this.permute(rest)) {
        result.push([arr[i], ...perm]);
      }
    }

    return result;
  }
}
