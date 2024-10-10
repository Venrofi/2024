export const encode = (phrase, key) => {
  if (GCD(key.a, ALPHABET.length) !== 1) {
    throw new Error('a and m must be coprime.');
  }

  const normalizedPhrase = phrase.toLowerCase().split('').filter(char => ![',', '.', ' ', ].includes(char));

  return normalizedPhrase.map((char, index) => {
    const addSeparator = index % 5 === 0 && index > 0;

    if (Number(char)) return addSeparator ? ` ${char}` : char;

    const letterIndex = ALPHABET.indexOf(char);
    const x = (key.a * letterIndex + key.b) % ALPHABET.length;

    return addSeparator ? ` ${ALPHABET[x]}` : ALPHABET[x];
  }).join('')
};

export const decode = (phrase, key) => {
  if (GCD(key.a, ALPHABET.length) !== 1) {
    throw new Error('a and m must be coprime.');
  }

  const normalizedPhrase = phrase.split('').filter(char => char !== ' ');

  return normalizedPhrase.map((char) => {
    if (Number(char)) return char;

    const encryptedLetterIndex = ALPHABET.indexOf(char);
    const inverse_a = modInverse(key.a, ALPHABET.length);
    const x = inverse_a * (encryptedLetterIndex - key.b) % ALPHABET.length;

    return x < 0 ? ALPHABET[x + ALPHABET.length] : ALPHABET[x];
  }).join('');
};

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const GCD = (a,b) => {
  if (b === 0) return a;

  return GCD(b, a % b);
}

const modInverse = (a, m) => {
  for(let x = 1; x < m; x++) {
    if (((a % m) * (x % m)) % m === 1) {
      return x;
    }
  }
}
