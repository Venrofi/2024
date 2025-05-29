export class InputCell {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  setValue(value) {
    if (this.value === value) return;

    this.value = value;

    for (const child of this.children) {
      child.update();
    }
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.children = [];
    this.callbacks = new Set();

    for (const input of inputCells) {
      input.children.push(this);
    }

    this.lastValue = this.value;
  }

  get value() {
    return this.fn(this.inputCells);
  }

  update() {
    const { lastValue, value } = this;

    this.lastValue = this.value;

    if (lastValue === value) {
      return;
    }

    for (const callback of this.callbacks) {
      callback.call(this);
    }

    for (const child of this.children) {
      child.update();
    }
  }

  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }

  call(cell) {
    this.values.push(this.fn(cell));
  }
}