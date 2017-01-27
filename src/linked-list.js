const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(value) {
      var node = new Node(value);

      if (this.length) {
          this._tail.next = node;
          node.previous = this._tail;
          this._tail = node;
        } else {
        this._head = node;
        this._tail = node;
      }

      this.length++;

      return this;
      }

    head() {
      return (this.length > 0) ? this._head.data : null;
    }

    tail() {
      return (this.length > 0) ? this._tail.data : null;
    }

    at(index) {
      var currentNode = this._head,
      length = this.length,
      count = 1;

      while (count <= index) {
      currentNode = currentNode.next;
      count++;
      }

      return currentNode.data;
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
      return (this._head === null) ? true : false;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;

      return this;
    }

    deleteAt(position) {
      var currentNode = this._head,
           length = this.length,
           count = 1,
           beforeNodeToDelete = null,
           nodeToDelete = null,
           deletedNode = null;

       if (length === 0 || position < 1 || position > length) {
           return null;
       }


       if (position === 1) {
           this._head = currentNode.next;

           if (!this._head) {
               this._head.previous = null;
           } else {
               this._tail = null;
           }


       } else if (position === this.length) {
           this._tail = this._tail.previous;
           this._tail.next = null;

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

    reverse() {
      var head = this._head,
          nodeCur = this._head,
          temp;

      this._tail = this._head;


      while(nodeCur){
        temp = nodeCur.next;
        nodeCur.next = nodeCur.previous;
        nodeCur.previous = temp;
        if(!temp){
        this._head = nodeCur;
        }
        nodeCur = temp;
      }
      return this;
    }

    indexOf(value) {
      var node = this._head;
      var i = 0; var flag;
      while (i != this.length) {
          if (node.data === value) {
              return i;
          } else {
            flag = -1;
          }
          node = node.next;
          i++;
      }
      return flag;
   }

   


}

module.exports = LinkedList;
