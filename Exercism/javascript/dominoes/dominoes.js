export const chain = (dominoes) => {
	if (dominoes.length === 0) {
		return dominoes;
	} else if (dominoes.length === 1) {
		return dominoes[0][0] === dominoes[0][1] ? dominoes : null;
	}

	const stone = dominoes[0];

	const chain = [stone].concat(makeChain(stone[0], stone[1], dominoes.slice(1)));

	return chain.length === dominoes.length ? chain : null;
};

const makeChain = (first, next, dominoes) => {
	if (!dominoes.some((stone) => stone.includes(first))) {
		return [];
	}

	const candidates = Array(dominoes.length).fill([]);

	for (let [i, stone] of dominoes.entries()) {
		if (!stone.includes(next)) {
			continue;
		}

		stone = stone[0] === next ? stone : [...stone].reverse();

		candidates[i] = [stone].concat(
			makeChain(first, stone[1], [...dominoes.slice(0, i), ...dominoes.slice(i + 1)])
		);
	}

	return candidates.find((c) => c.length === dominoes.length) || [];
};

///

export const myChain = (input = []) => {
	if (!input) return null;

	const availableDominoes = [...input].sort();
	const chainedDominoes = [];
	const dominoLeftovers = [];

	if (availableDominoes.length === 1) {
		const domino = availableDominoes.pop();

		return dominoPair(domino, domino) ? [domino] : null;
	}

	while (availableDominoes.length > 0) {
		const dominoA = availableDominoes.shift();

		if (chainedDominoes.length > 0) {
			const dominoB = chainedDominoes.pop();
			const pair = findChainedDominoPair(dominoB, dominoA);

			if (pair === null) {
				chainedDominoes.push(dominoB);
				dominoLeftovers.push(dominoA);
			} else {
				chainedDominoes.push(...pair);
			}
		} else {
			// search for first pair to star the chain
			const dominoB = availableDominoes.shift();
			const pair = findDominoPair(dominoA, dominoB);

			if (pair === null) {
				if (availableDominoes.length === 0) {
					break;
				} else {
					availableDominoes.push(dominoA, dominoB);
				}
			} else {
				chainedDominoes.push(...pair);
			}
		}
	}

	while (dominoLeftovers.length > 0) {
		const dominoA = dominoLeftovers.shift();

		// single leftover pair
		if (dominoLeftovers.length === 0) {
			for (let i = 0; i < chainedDominoes.length; i++) {
				if (
					dominoPair(dominoA, dominoA) &&
					findChainedDominoPair(chainedDominoes[i], dominoA)
				) {
					chainedDominoes.splice(i + 1, 0, dominoA);
					break;
				}
			}

			break;
		}

		const dominoB = dominoLeftovers.shift();
		const pair = findDominoPair(dominoA, dominoB);

		if (pair === null) {
			if (dominoLeftovers.length === 0) break;

			dominoLeftovers.push(dominoA);
		} else {
			for (let i = 0; i < chainedDominoes.length - 1; i++) {
				if (
					findChainedDominoPair(chainedDominoes[i], pair[0]) &&
					findChainedDominoPair(pair[1], chainedDominoes[i + 1])
				) {
					chainedDominoes.splice(i + 1, 0, ...pair);
					break;
				}
			}
		}
	}

	if (
		chainedDominoes.length > 0 &&
		chainedDominoes[0][0] !== chainedDominoes[chainedDominoes.length - 1][1]
	) {
		return null;
	}

	return chainedDominoes.length === input.length ? chainedDominoes : null;
};

const dominoPair = (a = [], b = []) => a[1] === b[0];

const findDominoPair = (a = [], b = []) => {
	let reverseA = [...a].reverse();
	let reverseB = [...b].reverse();

	if (dominoPair(a, b)) return [a, b];

	if (dominoPair(a, reverseB)) return [a, reverseB];

	if (dominoPair(reverseA, b)) return [reverseA, b];

	if (dominoPair(reverseA, reverseB)) return [reverseA, reverseB];

	return null;
};

const findChainedDominoPair = (a = [], b = []) => {
	let reversedB = [...b].reverse();

	if (dominoPair(a, b)) return [a, b];

	if (dominoPair(a, reversedB)) return [a, reversedB];

	return null;
};
