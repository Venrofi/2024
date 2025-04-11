export const encode = (input = '') => {
    let count = 1;
    let result = '';

    input.split('').forEach((char, index) => {
      if (char === input[index+1]) {
          count++;
      } else {
          result += count > 1 ? count + char : char;
          count = 1;
      }
    });

    return result;
};

export const decode = (input = '') => {
    let result = '';
    let num = '';

    input.split('').forEach((char) => {
        if (Number(char)) {
            num += char;
        } else {
            num = Number(num);

            if (num === 0) {
                num += 1;
            }

            result = result.padEnd(result.length + num, char);
            num = '';
        }
    });

    return result;
};
