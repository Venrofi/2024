export const translate = (sequence) => {
  if (!sequence) {
    return [];
  }

  const codons = sequence.match(/.{1,3}/g);
  const result = [];

  for (const codon of codons) {
    if (stopCodons.includes(codon)) {
      break;
    }

    if (!codonToProtein[codon]) {
      throw new Error('Invalid codon');
    }

    result.push(codonToProtein[codon]);
  }

  return result;
};

const stopCodons = ['UAA', 'UAG', 'UGA'];

const codonToProtein = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGC: 'Cysteine',
  UGU: 'Cysteine',
  UGG: 'Tryptophan',
};