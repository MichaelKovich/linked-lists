// Linked List is a data structure consisting of a group of vertices (nodes) which together represent a sequence.
// Under the simplest form, each vertex is composed of data and a reference (link) to the next vertex in the sequence.

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(element) {
    let newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length += 1;
  }

  get(element) {
    if (element > this.length) return 'Invalid Input!';
    let currentNode = this.head;

    while (currentNode.element !== element) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  remove(element) {
    if (this.length === 0) {
      return 'There is no spoon.';
    }

    let currentNode = this.head;
    let previousNode;

    if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // Once we've identified the correct node, we'll set the previousNode's reference pointer
      // toward the node that comes after the node we're removing.
      previousNode.next = currentNode.next;
    }
    this.length -= 1;
  }

  log() {
    let currentNode = this.head;
    let str = '';
    if (this.head === null) {
      console.log('Empty');
    } else {
      str += `${currentNode.element} --> `;
      while (currentNode.next) {
        currentNode = currentNode.next;
        str += `${currentNode.element} --> `;
      }
    }
    console.log(str + 'null');
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

const list = new LinkedList();
list.add('first');
list.add('second');
list.add('third');
list.add('fourth');
list.add('fifth');
// list.remove('second');
list.log();
console.log(list.get('second'));
