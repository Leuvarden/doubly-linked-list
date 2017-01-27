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

            var nodeCur = this.getNode(index);
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
        if (this._head) {
            this._head = null;
            this._tail = null;
            this.length = 0;

            return this;
        } else {
            return new LinkedList();
        }
    }

    deleteAt(index) {

        if (index < this.length) {

            if (this._head === this._tail) {
                return new LinkedList();
            } else {

                var nodeCur = this.getNode(index);
                var nodePrev = nodeCur.previous;
                var nodeNext = nodeCur.next;

                nodePrev.next = nodeNext;
                nodeNext.previous = nodePrev;
                nodeCur = null;
            }

            this.length--;


            return this;
        } else {
            return new LinkedList();
        }
    }

    reverse() {
        var head = this._head,
            nodeCur = this._head,
            temp;

        this._tail = this._head;


        while (nodeCur) {
            temp = nodeCur.next;
            nodeCur.next = nodeCur.previous;
            nodeCur.previous = temp;
            if (!temp) {
                this._head = nodeCur;
            }
            nodeCur = temp;
        }
        return this;
    }

    indexOf(value) {
        var node = this._head;
        var i = 0;
        var flag;
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

    getNode(index) {
        var currentNode = this._head,
            length = this.length,
            count = 1;

        while (count <= index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }



}

module.exports = LinkedList;
