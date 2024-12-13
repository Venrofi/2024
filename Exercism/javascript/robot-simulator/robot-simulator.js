export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor() {
    this.AVAILABLE_DIRECTIONS = ['north', 'east', 'south', 'west'];

    this._bearing = this.AVAILABLE_DIRECTIONS[0];
    this._x = 0;
    this._y = 0;
  }

  get bearing() {
    return this._bearing;
  }

  get coordinates() {
    return [this._x, this._y];
  }

  place({ x, y, direction }) {
    if (!this.AVAILABLE_DIRECTIONS.includes(direction)) {
      throw new InvalidInputError(`Invalid direction: ${direction}`);
    }

    this._bearing = direction;
    this._x = x;
    this._y = y;
  }

  evaluate(instructions) {
    const AVAILABLE_INSTRUCTIONS = 'RLA';

    instructions.split('').forEach(instruction => {
      if (!AVAILABLE_INSTRUCTIONS.includes(instruction)) {
        throw new InvalidInputError(`Invalid instruction: ${instruction}`);
      }

      const direction = this.bearing;
      const directionIndex = this.AVAILABLE_DIRECTIONS.indexOf(direction);
      const numberOfDirections = this.AVAILABLE_DIRECTIONS.length;

      switch (instruction) {
        case 'R': {
          this._bearing = this.AVAILABLE_DIRECTIONS[(directionIndex + 1) % numberOfDirections];
          break;
        }
        case 'L': {
          this._bearing = this.AVAILABLE_DIRECTIONS[(directionIndex - 1 + numberOfDirections) % numberOfDirections];
          break;
        }
        case 'A': {
          if (direction === 'north') {
            this._y += 1;
          }

          if (direction === 'east') {
            this._x += 1;
          }

          if (direction === 'south') {
            this._y -= 1;
          }

          if (direction === 'west') {
            this._x -= 1;
          }

          break;
        }
      }
    });
  }
}
