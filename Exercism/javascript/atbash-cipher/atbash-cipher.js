export const encode = (input) => {
  const normalizedInput = input.toLowerCase().split('').filter(char => ![',', '.', ' ', ].includes(char));

  return normalizedInput.map((char, index) => {
    if (Number(char)) return char;

    const addSeparator = index % 5 === 0 && index > 0;
    const x = ALPHABET.indexOf(char);

    return addSeparator ? ` ${CIPHER[x]}` : CIPHER[x];

  }).join('');
};

export const decode = (input) => {
  return input.split('').filter(char => char !== ' ').map((char) => {
    if (Number(char)) return char;

    const x = CIPHER.indexOf(char);

    return ALPHABET[x];
  }).join('')
};

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const CIPHER = 'zyxwvutsrqponmlkjihgfedcba';
