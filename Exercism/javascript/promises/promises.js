export const promisify =
	(fun) =>
	(...args) =>
		new Promise((resolve, reject) => {
			fun(...args, (err, result) => {
				if (err) return reject(err);

				resolve(result);
			});
		});

export const all = (promises) => {
	return new Promise((resolve, reject) => {
		if (promises === undefined) resolve(undefined);
		if (promises.length === 0) resolve([]);

		const results = [];
		let resolvedCount = 0;

		promises.forEach((promise, index) => {
			promise
				.then((value) => {
					results[index] = value;
					resolvedCount += 1;

					if (resolvedCount === promises.length) {
						resolve(results);
					}
				})
				.catch(reject);
		});
	});
};

export const allSettled = (promises) => {
	return new Promise((resolve) => {
		if (promises === undefined) resolve(undefined);
		if (promises.length === 0) resolve([]);

		const results = [];
		let promiseCompletedCount = 0;

		promises.forEach((promise, index) => {
			promise
				.then((value) => (results[index] = value))
				.catch((err) => (results[index] = err))
				.finally(() => {
					promiseCompletedCount += 1;

					if (promiseCompletedCount === promises.length) resolve(results);
				});
		});
	});
};

export const race = (promises) => {
	return new Promise((resolve, reject) => {
		if (promises === undefined) resolve(undefined);
		if (promises.length === 0) resolve([]);

		promises.forEach((promise) => {
			promise.then((value) => resolve(value)).catch((err) => reject(err));
		});
	});
};

export const any = (promises) => {
	return new Promise((resolve, reject) => {
		if (promises === undefined) resolve(undefined);
		if (promises.length === 0) resolve([]);

		const rejects = [];

		promises.forEach((promise) => {
			promise
				.then((value) => resolve(value))
				.catch((err) => rejects.push(err))
				.finally(() => {
					if (rejects.length === promises.length) reject(rejects);
				});
		});
	});
};
