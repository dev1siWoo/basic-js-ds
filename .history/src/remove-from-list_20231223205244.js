const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let current = l;
  let previous = null;

  // Handle the case where the first node has the value k
  while (current !== null && current.value === k) {
    l = current.next;
    current = l;
  }

  // Iterate through the rest of the list
  while (current !== null) {
    // If the current node has the value k, remove it
    if (current.value === k) {
      previous.next = current.next;
    } else {
      // Move to the next node
      previous = current;
    }

    current = current.next;
  }

  return l;
}

module.exports = {
  removeKFromList
};
