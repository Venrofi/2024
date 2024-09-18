export class Bowling {
	constructor() {
		this._frames = [];
		this._score = 0;
		this.hasGameFinished = false;
	}

	roll(pins = 0) {
		if (pins < 0) throw new Error("Negative roll is invalid");
		if (pins > ALL_PINS) throw new Error("Pin count exceeds pins on the lane");

		if (this.hasGameFinished) throw new Error("Cannot roll after game is over");

		const finalFrame = this._frames[GAME_FRAMES - 1];
		const lastFrame = this._frames.pop();

		if (!lastFrame) {
			this._frames.push([pins]);
		}

		if (lastFrame?.length === 2) {
			this._frames.push(lastFrame, [pins]);
		}

		if (lastFrame?.length === 1) {
			const firstRoll = lastFrame[0];

			if (firstRoll === ALL_PINS) {
				this._frames.push(lastFrame, [pins]);
			} else {
				if (firstRoll + pins > ALL_PINS)
					throw new Error("Pin count exceeds pins on the lane");

				const finalFrameScore = finalFrame?.reduce((sum, val) => (sum += val));

				if (finalFrameScore === ALL_PINS) {
					this._frames.push(lastFrame, [pins]);
				} else {
					lastFrame.push(pins);
					this._frames.push(lastFrame);
				}
			}
		}

		if (this._frames.length >= GAME_FRAMES && finalFrame) {
			const finalFrameScore = finalFrame.reduce((sum, val) => (sum += val));
			const isFinalStrike =
				finalFrame.length === 1 && this._frames.length === GAME_WITH_FINAL_STRIKE;
			const isFinalSpare =
				finalFrame.length === 2 && this._frames.length === GAME_WITH_FINAL_SPARE;
			const isFinalThrow = finalFrame.length === 2 && this._frames.length === GAME_FRAMES;

			if (finalFrameScore === ALL_PINS) {
				if (isFinalStrike || isFinalSpare) {
					this.hasGameFinished = true;
				}
			} else {
				if (isFinalThrow) {
					this.hasGameFinished = true;
				}
			}
		}
	}

	score() {
		if (!this.hasGameFinished)
			throw new Error("Score cannot be taken until the end of the game");

		const rolls = this._frames.flat();
		let rollIndex = 0;

		this._frames.forEach((frame, index) => {
			if (index >= GAME_FRAMES) return;

			const ballCounts = frame.length;
			const frameScore = frame.reduce((sum, pins) => (sum += pins));

			rollIndex += ballCounts;

			if (frameScore === ALL_PINS) {
				if (ballCounts === 1) {
					const strikeBonus = rolls
						.slice(rollIndex, rollIndex + 2)
						.reduce((sum, pins) => (sum += pins));
					this._score += frameScore + strikeBonus;
				} else if (ballCounts === 2) {
					const spareBonus = rolls[rollIndex];
					this._score += frameScore + spareBonus;
				}
			} else {
				this._score += frameScore;
			}
		});

		return this._score;
	}
}

const GAME_WITH_FINAL_STRIKE = 12;
const GAME_WITH_FINAL_SPARE = 11;
const GAME_FRAMES = 10;
const ALL_PINS = 10;
