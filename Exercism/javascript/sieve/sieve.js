export const primes = (n = 1) => {
	const primeNumbers = [];
	let numbers = [...Array(n + 1).keys()].slice(2); // Start array with '2' - the very first prime number

	const numberMultiples = (num, limit) => {
		const multiples = [];
		for (let i = num * 2; i <= limit; i += num) {
			multiples.push(i);
		}

		return multiples;
	};

	while (numbers.length > 0) {
		const number = numbers.shift();
		const multiples = numberMultiples(number, n);

		numbers = numbers.filter((element) => !multiples.includes(element));
		primeNumbers.push(number);
	}

	return primeNumbers;
};
