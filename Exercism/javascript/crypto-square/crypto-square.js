export class Crypto {

  constructor(input) {
    const excludedCharacters = ['!', '?', '.', ',', '@', '%', '-', ':', ' '];
    const normalizedInput = input.split('').filter(char => !excludedCharacters.includes(char)).join('').toLowerCase();

    this.rectange = [];
    this.generateSquare(normalizedInput);
  }

  get ciphertext() {
    let cipher = '';

    if (this.rectange.length === 0) return cipher;

    let colLength = this.rectange.length;
    let rowLength = this.rectange[0].length;

    if (this.rectange.length !== this.rectange[0].length) {
      colLength += 1;
      rowLength -= 1;
    }

    for (let i = 0; i < colLength; i++) {
      let chunk = '';

      for (let j = 0; j < rowLength; j++) {
        chunk += this.rectange[j][i];
      }

      cipher += chunk;
      cipher += i !== colLength - 1 ? ' ' : '';
    }

    return cipher;
  }

  generateSquare(input) {
    const square = this.getSquareDimensions(input);
    const inputValues = input.split('');

    for (let i = 0; i < square.height; i++) {
      this.rectange.push([]);

      for (let j = 0; j < square.width; j++) {
        const value = inputValues.shift();

        this.rectange[i].push(value ?? ' ')
      }
    }
  }

  getSquareDimensions(input) {
    const initialSquareSize = Math.floor(Math.sqrt(input.length));

    let height = initialSquareSize;
    let width = initialSquareSize;

    while (height * width < input.length) {
      if (width <= height) {
        width += 1;
      } else {
        height += 1;
      }
    }

    return { height, width };
  }
}
