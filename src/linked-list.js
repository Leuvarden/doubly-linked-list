const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }

    append(value) {
      var node = new Node(value);

      if (this.length) {
          this.tail.next = node;
          node.previous = this.tail;
          this.tail = node;
        } else {
        this.head = node;
        this.tail = node;
      }

      this.length++;

      return this;
      }

    head() {
      return (this.length > 0) ? this.head : null;
    }

    tail() {
      return (this.length > 0) ? this.tail : null;
    }

    at(index) {
      var currentNode = this.head,
      length = this.length,
      count = 1;

      while (count <= index) {
      currentNode = currentNode.next;
      count++;
      }

      return currentNode;
    }

    insertAt(index, value) {
      if (index < this.length) {

            var node = new Node(value);

            var nodeCur = this.at(index);
            var nodePrev = nodeCur.previous;

            node.previous = nodePrev;
            node.next = nodeCur;
            nodePrev.next = node;
            nodeCur.previous = node;

            this.length++;

            return this;
        } else {
            return null;
        }
    }

    isEmpty() {
      return (this.head === null) ? true : false;
    }

    clear() {}

    deleteAt(position) {
      var currentNode = this.head,
           length = this.length,
           count = 1,
           beforeNodeToDelete = null,
           nodeToDelete = null,
           deletedNode = null;

       if (length === 0 || position < 1 || position > length) {
           return null;
       }


       if (position === 1) {
           this.head = currentNode.next;

           if (!this.head) {
               this.head.previous = null;
           } else {
               this.tail = null;
           }


       } else if (position === this.length) {
           this.tail = this.tail.previous;
           this.tail.next = null;

       } else {
           while (count < position) {
               currentNode = currentNode.next;
               count++;
           }

           beforeNodeToDelete = currentNode.previous;
           nodeToDelete = currentNode;
           afterNodeToDelete = currentNode.next;

           beforeNodeToDelete.next = afterNodeToDelete;
           afterNodeToDelete.previous = beforeNodeToDelete;
           deletedNode = nodeToDelete;
           nodeToDelete = null;
       }

       this.length--;

       return this;
    }

    reverse() {}

    indexOf(value) {
      var node = this.head;
      var i = 0;
      while (i != this.length) {
          if (node.data == value) {
              return i;
          }
          node = node.next;
          i++;
      }
  }


}

module.exports = LinkedList;
