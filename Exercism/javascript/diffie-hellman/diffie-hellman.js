export class DiffieHellman {
	constructor(p, g) {
		const isPrime = (n) => {
			for (let i = 2; i < n; i++) {
				if ((n / i) % 2 === 0) return false;
			}

			return true;
		};

		if ((p || g) >= 9999 || (p || g) <= 0) {
			throw new Error("Specified arguments are out of range!");
		}

		if (!isPrime(p) || !isPrime(g)) {
			throw new Error("Specified arguments are not prime numbers!");
		}

		this.p = p;
		this.g = g;
	}

	getPublicKey(privateKey) {
		if (privateKey <= 1 || privateKey === this.p || privateKey === this.p + 1) {
			throw new Error("Wrong Private Key!");
		}

		return this.g ** privateKey % this.p;
	}

	getSecret(theirPublicKey, myPrivateKey) {
		return theirPublicKey ** myPrivateKey % this.p;
	}
}
