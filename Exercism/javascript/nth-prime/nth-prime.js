export const prime = (n = 1) => {
	if (n === 0) throw new Error("there is no zeroth prime");

	let number = 1;
	let primesFound = 0;
	let searchedPrimeIndex = n;

	const isPrime = (n) => {
		if (n <= 1) return false;

		for (let i = 2; i < n; i++) {
			if (n % i === 0) return false;
		}

		return true;
	};

	while (searchedPrimeIndex > primesFound) {
		number += 1;

		if (isPrime(number)) {
			primesFound += 1;
		}
	}

	return number;
};
