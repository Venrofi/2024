const ROMAN_NUMERALS = [
  { value: 1000, letter: 'M' },
  { value: 900,  letter: 'CM' },
  { value: 500,  letter: 'D' },
  { value: 400,  letter: 'CD' },
  { value: 100,  letter: 'C' },
  { value: 90,   letter: 'XC' },
  { value: 50,   letter: 'L' },
  { value: 40,   letter: 'XL' },
  { value: 10,   letter: 'X' },
  { value: 9,    letter: 'IX' },
  { value: 5,    letter: 'V' },
  { value: 4,    letter: 'IV' },
  { value: 1,    letter: 'I' },
].sort((a, b) => b.value - a.value);

export const toRoman = (numberToConvert = 0) => {
  let number = numberToConvert;
  let result = '';

  ROMAN_NUMERALS.forEach(({value, letter}) => {
    while (number >= value) {
      result += letter;
      number -= value;
    }
  });

  return result;
};
