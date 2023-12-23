const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);

    if (!this._root) {
      this._root = node;
      return;
    }

    let current = this._root;
    while (current) {
      if (node.data < current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.data > current.data) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }

  has(data) {
    let current = this._root;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this._root) {
      return null;
    }
    let current = this._root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this._root) {
      return null;
    }
    let current = this._root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
