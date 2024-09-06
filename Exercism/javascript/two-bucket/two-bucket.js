export class TwoBucket {
	constructor(bucketOneSize, bucketTwoSize, goal, startingBucket) {
		if (goal > bucketOneSize && goal > bucketTwoSize) throw new Error("Impossible!");

		this.goal = goal;
		this.bucketOneSize = bucketOneSize;
		this.bucketTwoSize = bucketTwoSize;
		this.startingBucket = startingBucket;

		try {
			this.solve();
		} catch (error) {
			throw new Error(error); // Check if given params can work
		}
	}

	solve() {
		let moves = 0;
		let bucket = 0;
		let otherBucket = 0;

		const bucketSize = this.startingBucket === "one" ? this.bucketOneSize : this.bucketTwoSize;
		const otherBucketSize =
			this.startingBucket === "one" ? this.bucketTwoSize : this.bucketOneSize;

		if (this.goal === bucketSize) {
			return {
				moves: 1,
				goalBucket: this.startingBucket === "one" ? "one" : "two",
				otherBucket: 0,
			};
		}

		if (this.goal === otherBucketSize) {
			return {
				moves: 2,
				goalBucket: this.startingBucket === "two" ? "one" : "two",
				otherBucket: bucketSize,
			};
		}

		while (bucket !== this.goal && otherBucket !== this.goal) {
			// 1st Bucket can't be empty
			if (bucket === 0) {
				bucket += bucketSize;
				moves += 1;
			}

			// 2nd Bucket can't be full
			if (otherBucket === otherBucketSize) {
				otherBucket = 0;
				moves += 1;
			}

			const pourAmount =
				otherBucketSize - otherBucket > bucket ? bucket : otherBucketSize - otherBucket;

			otherBucket += pourAmount;
			bucket -= pourAmount;
			moves += 1;

			if (moves > 100) throw new Error("Not possible to reach the goal!");
		}

		return {
			moves,
			goalBucket: this.goal === bucket && this.startingBucket === "one" ? "one" : "two",
			otherBucket: this.goal === bucket ? otherBucket : bucket,
		};
	}
}
