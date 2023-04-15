const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.elems = [];
  }

  push(elem) {
    this.elems.push(elem);
  }

  pop() {
    return this.elems.pop();
  }

  peek() {
    if (this.elems.length > 0) {
      return this.elems[this.elems.length - 1];
    } else {
      return undefined;
    }
  }
}

module.exports = {
  Stack
};
