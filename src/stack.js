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
		this.storage = [];
		this.length = 0;
	}


	push(element) {
		this.length += 1;
		this.storage[this.length - 1] = element;
	}

	pop() {
		if (this.length) {
			let removed = this.storage[this.length - 1];
			delete this.storage[this.length - 1];
			this.length -= 1;
			return removed;
		} else {
			return false;
		}
	}

	peek() {
		return this.storage[this.length - 1];
	}
}

module.exports = {
	Stack
};
