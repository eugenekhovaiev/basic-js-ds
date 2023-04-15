const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    let newElem = new ListNode(value);
    if (!this.value) {
      this.value = newElem.value;
      this.next = newElem.next;
      return;
    } 

    let curr = this;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newElem;
  }

  dequeue() {
    const deletedElem = this.value;
    console.log(deletedElem);
    this.value = this.next.value;
    this.next = this.next.next;
    return deletedElem;
  }
}

module.exports = {
  Queue
};
