export const toRna = (sequence) => {
	const RNA = sequence
		.split("")
		.map((nucleotide) => {
			switch (nucleotide) {
				case "G":
					return "C";
				case "C":
					return "G";
				case "T":
					return "A";
				case "A":
					return "U";
				default:
					return nucleotide;
			}
		})
		.join("");

	return RNA;
};
