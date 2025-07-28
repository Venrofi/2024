export const encode = (message, rails) => {
  const zigZag = Array(rails).fill('');
  let rail = 0;
  let direction = 1;

  for (let i = 0; i < message.length; i++) {
    zigZag[rail] += message[i];
    rail += direction;

    if (rail === 0 || rail === rails - 1) direction *= -1;
  }

  return zigZag.join('');
};

export const decode = (message, rails) => {
  const zigZag = [];

  let rail = 0;
  let direction = 1;

  for (let i = 0; i < message.length; i++) {
    zigZag.push(rail);
    rail += direction;

    if (rail === 0 || rail === rails - 1) direction *= -1;
  }

  const railCounts = Array(rails).fill(0);
  zigZag.forEach((r) => { railCounts[r] += 1 });

  const railChunks = [];
  let position = 0;

  for (let i = 0; i < rails; i++) {
    railChunks[i] = message.slice(position, position + railCounts[i]).split('');
    position += railCounts[i];
  }

  let result = '';

  for (let i = 0; i < message.length; i++) {
    const r = zigZag[i];
    result += railChunks[r].shift();
  }

  return result;
};
