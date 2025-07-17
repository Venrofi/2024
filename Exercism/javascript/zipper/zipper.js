export class Zipper {
  constructor(node, context = []) {
    this.node = node;
    this.context = context;
  }

  static fromTree(tree) {
    return new Zipper(tree, []);
  }

  toTree() {
    let node = this.node;

    for (let i = this.context.length - 1; i >= 0; i--) {
      const { value, left, right, direction } = this.context[i];

      if (direction === 'left') {
        node = { value, left: node, right };
      } else {
        node = { value, left, right: node };
      }
    }

    return node;
  }

  value() {
    return this.node?.value;
  }

  left() {
    if (!this.node?.left) return null;

    const { value, right } = this.node;
    const context = [...this.context, { value, left: null, right, direction: 'left' }];

    return new Zipper(this.node.left, context);
  }

  right() {
    if (!this.node?.right) return null;

    const { value, left } = this.node;
    const context = [...this.context, { value, left, right: null, direction: 'right' }];

    return new Zipper(this.node.right, context);
  }

  up() {
    if (this.context.length === 0) return null;

    const { value, left, right, direction } = this.context[this.context.length - 1];
    const context = this.context.slice(0, -1);

    if (direction === 'left') {
      return new Zipper({ value, left: this.node, right }, context);
    } else {
      return new Zipper({ value, left, right: this.node }, context);
    }
  }

  setValue(value) {
    if (!this.node) return this;

    return new Zipper({ ...this.node, value }, this.context);
  }

  setLeft(left) {
    if (!this.node) return this;

    return new Zipper({ ...this.node, left }, this.context);
  }

  setRight(right) {
    if (!this.node) return this;

    return new Zipper({ ...this.node, right }, this.context);
  }
}
