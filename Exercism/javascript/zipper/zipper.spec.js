import { beforeEach, describe, expect, test } from '@jest/globals';
import { Zipper } from './zipper';

function bt(value, left, right) {
  return {
    value,
    left,
    right,
  };
}

function leaf(value) {
  return bt(value, null, null);
}

describe('Zipper', () => {
  const t1 = bt(1, bt(2, null, leaf(3)), leaf(4));
  const t2 = bt(1, bt(5, null, leaf(3)), leaf(4));
  const t3 = bt(1, bt(2, leaf(5), leaf(3)), leaf(4));
  const t4 = bt(1, leaf(2), leaf(4));
  const t5 = bt(1, bt(2, null, leaf(3)), bt(6, leaf(7), leaf(8)));
  const t6 = bt(1, bt(2, null, leaf(5)), leaf(4));
  let zipper;

  beforeEach(() => {
    zipper = Zipper.fromTree(t1);
  });

  test('data is retained', () => {
    expect(zipper.toTree()).toEqual(t1);
  });

  test('left, right and value', () => {
    expect(zipper.left().right().value()).toEqual(3);
  });

  test('dead end', () => {
    expect(zipper.left().left()).toBe(null);
  });

  test('tree from deep focus', () => {
    expect(zipper.left().right().toTree()).toEqual(t1);
  });

  test('traversing up from top', () => {
    expect(zipper.up()).toEqual(null);
  });

  test('left, right and up', () => {
    expect(zipper.left().up().right().up().left().right().value()).toEqual(3);
  });

  test('ability to descend multiple levels and return', () => {
    expect(zipper.left().right().up().up().value()).toEqual(1);
  });

  test('setValue', () => {
    expect(zipper.left().setValue(5).toTree()).toEqual(t2);
  });

  test('setValue after traversing up', () => {
    expect(zipper.left().right().up().setValue(5).toTree()).toEqual(t2);
  });

  test('setLeft with leaf', () => {
    expect(zipper.left().setLeft(leaf(5)).toTree()).toEqual(t3);
  });

  test('setRight with null', () => {
    expect(zipper.left().setRight(null).toTree()).toEqual(t4);
  });

  test('setRight with subtree', () => {
    expect(zipper.setRight(bt(6, leaf(7), leaf(8))).toTree()).toEqual(t5);
  });

  test('setValue on deep focus', () => {
    expect(zipper.left().right().setValue(5).toTree()).toEqual(t6);
  });

  test('left returns a new Zipper', () => {
    const left = zipper.left();
    expect(left).not.toBe(zipper);
  });

  test('right returns a new Zipper', () => {
    const right = zipper.right();
    expect(right).not.toBe(zipper);
  });

  test('setValue returns a new Zipper', () => {
    const anotherZipper = zipper.setValue(99);
    expect(anotherZipper).not.toBe(zipper);
  });

  test('setRight returns a new Zipper', () => {
    const right = zipper.setRight(bt(55, null, null));
    expect(right).not.toBe(zipper);
  });

  test('setLeft returns a new Zipper', () => {
    const left = zipper.setLeft(bt(55, null, null));
    expect(left).not.toBe(zipper);
  });

  test('up returns a new Zipper', () => {
    const up = zipper.right().up();
    expect(zipper).not.toBe(up);
  });

  test('should return same zipper from different paths', () => {
    const z1 = zipper.left().up().right();
    const z2 = zipper.right();
    expect(z1).toEqual(z2);
  });
});
