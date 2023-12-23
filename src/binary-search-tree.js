const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
		this.rootNode = null;
	}

	root() {
		return this.rootNode
	}

	add(data) {

		let newNode = new Node(data);

		if (this.rootNode === null) {
			this.rootNode = newNode;
		} else {
			insertNode(this.rootNode, newNode);
		}

		function insertNode(node, newNode) {
			if (newNode.data < node.data) {
				if (node.left === null) {
					node.left = newNode;
				} else {
					insertNode(node.left, newNode);
				}
			} else {
				if (node.right === null) {
					node.right = newNode;
				} else {
					insertNode(node.right, newNode);
				}
			}
		}
	}

	findNode(node, data) {
		if (!node) {
			return null;
		}

		if (data === node.data) {
			return node;
		}

		else if (data < node.data) {
			return this.findNode(node.left, data);
		}

		else {
			return this.findNode(node.right, data);
		}
	}

	findMinValue(node) {
		let current = node;
		while (current.left) {
			current = current.left;
		}
		return current.data;
	}

	findMaxValue(node) {
		let current = node;
		while (current.right) {
			current = current.right;
		}
		return current.data;
	}

	has(data) {
		return this.findNode(this.rootNode, data) !== null;
	}

	find(data) {
		return this.findNode(this.rootNode, data);
	}

	removeNode(node, data) {
		if (!node) {
			return null;
		}

		if (data < node.data) {
			node.left = this.removeNode(node.left, data);
		}
		else if (data > node.data) {
			node.right = this.removeNode(node.right, data);
		} else {
			if (!node.left) {
				return node.right;
			}
			else if (!node.right) {
				return node.left;
			}
			node.data = this.findMinValue(node.right);
			node.right = this.removeNode(node.right, node.data);
		}
		return node;
	}

	remove(data) {
		this.root = this.removeNode(this.rootNode, data);
	}

	min() {
		if (!this.rootNode) {
			return null;
		}
		return this.findMinValue(this.rootNode);
	}

	max() {
		if (!this.rootNode) {
			return null;
		}
		return this.findMaxValue(this.rootNode);
	}
}

module.exports = {
	BinarySearchTree
};