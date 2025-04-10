export const abilityModifier = (score = 0) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3')
  }

  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor((score - 10) / 2);
};

export class Character {
  #strength;
  #dexterity;
  #constitution;
  #intelligence;
  #wisdom;
  #charisma;

  constructor() {
    this.#strength = Character.rollAbility();
    this.#dexterity = Character.rollAbility();
    this.#constitution = Character.rollAbility();
    this.#intelligence = Character.rollAbility();
    this.#wisdom = Character.rollAbility();
    this.#charisma = Character.rollAbility();
  }

  static rollAbility() {
    const diceRolls = Array.from({length: 4}, () => Math.floor(Math.random() * 6) + 1);

    return diceRolls.sort().slice(1).reduce((acc, val) => acc + val, 0);
  }

  get strength() {
    return this.#strength;
  }

  get dexterity() {
    return this.#dexterity;
  }

  get constitution() {
    return this.#constitution;
  }

  get intelligence() {
    return this.#intelligence;
  }

  get wisdom() {
    return this.#wisdom;
  }

  get charisma() {
    return this.#charisma;
  }

  get hitpoints() {
    return abilityModifier(this.#constitution) + 10;
  }
}
