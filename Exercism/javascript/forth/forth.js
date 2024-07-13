export class Forth {
	constructor() {
		this._stack = [];
		this.customOperators = [];
		this.defaultOperators = ["+", "-", "/", "*", "swap", "over", "dup", "drop"];
		this.defaultTwoNumberOperators = this.defaultOperators.filter(
			(operator) => !["dup", "drop"].includes(operator)
		);
	}

	handleAddCustomOperator(customInput = "") {
		const newCustomOperatorName = customInput.shift();

		if (!isNaN(newCustomOperatorName)) {
			throw new Error("Invalid definition");
		}

		const existingCustomOperatorIndex = this.customOperators.findIndex(
			(custom) => custom.operator === newCustomOperatorName
		);

		if (existingCustomOperatorIndex !== -1) {
			const customInputElements = customInput.map((element) =>
				element === newCustomOperatorName
					? this.customOperators[existingCustomOperatorIndex].elements
					: element
			);

			this.customOperators[existingCustomOperatorIndex].elements = customInputElements;
		} else {
			const customInputElements = [];

			customInput.forEach((element) => {
				const exisitngCustomOperator = this.customOperators.findIndex(
					(custom) => custom.operator === element
				);

				if (exisitngCustomOperator !== -1) {
					customInputElements.push(this.customOperators[exisitngCustomOperator].elements);
				} else {
					customInputElements.push(element);
				}
			});

			this.customOperators.push({
				operator: newCustomOperatorName,
				elements: customInputElements,
			});
		}
	}

	evaluate(input = "") {
		if (input.startsWith(":") && input.endsWith(";")) {
			const customInput = input.slice(1, -1).trim().toLowerCase().split(" ");

			this.handleAddCustomOperator(customInput);
			return;
		}

		const inputElements = input.toLowerCase().split(" ");

		while (inputElements.length > 0) {
			const element = inputElements.shift();

			if (!isNaN(element)) {
				this._stack.push(Number(element));
			} else {
				const customOperator = this.customOperators.find(
					(custom) => custom.operator === element
				);

				if (!this.defaultOperators.includes(element) && !customOperator) {
					throw new Error("Unknown command");
				}

				if (this._stack.length === 0 && this.customOperators.length === 0) {
					throw new Error("Stack empty");
				}

				if (customOperator) {
					inputElements.push(...customOperator.elements);
					continue;
				}

				if (this.defaultTwoNumberOperators.includes(element)) {
					if (this._stack.length < 2) {
						throw new Error("Stack empty");
					}

					const firstNumber = this._stack.pop();
					const secondNumber = this._stack.pop();

					let result;
					switch (element) {
						case "+":
							result = secondNumber + firstNumber;
							break;
						case "-":
							result = secondNumber - firstNumber;
							break;
						case "/":
							if (firstNumber === 0) {
								throw new Error("Division by zero");
							}
							result = Number.parseInt(secondNumber / firstNumber);
							break;
						case "*":
							result = secondNumber * firstNumber;
							break;
						case "swap":
							this._stack.push(firstNumber, secondNumber);
							continue;
						case "over":
							this._stack.push(secondNumber, firstNumber, secondNumber);
							continue;
						default:
							throw new Error("Unknown operator");
					}
					this._stack.push(result);
					continue;
				}

				if (element === "dup") {
					const topElement = this._stack.pop();

					this._stack.push(topElement, topElement);
					continue;
				}

				if (element === "drop") {
					this._stack.pop();
					continue;
				}
			}
		}
	}

	get stack() {
		return this._stack;
	}
}
