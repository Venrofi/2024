const NUCLEOTIDES = ["A", "C", "G", "T"];

export function countNucleotides(strand = "") {
	const result = {};

	NUCLEOTIDES.forEach((nucleotide) => {
		result[nucleotide] = 0;
	});

	strand.split("").forEach((cell) => {
		if (!NUCLEOTIDES.includes(cell)) {
			throw new Error("Invalid nucleotide in strand");
		}

		result[cell] += 1;
	});

	return Object.values(result).join(" ");
}
