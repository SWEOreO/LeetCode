// single linked list
// push solution
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class singleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add to the end of the list
  // append to array = add element to the end of the array
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // push solution - same as append
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // add to the start of the list
  // prepend to array = add element to the start of the array
  // prepend to string = add element to the start of the string
  // prepend to linked list = add element to the start of the linked list
  prepend(value) { 
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

 // inseyrt solution
 // add to the middle of the list
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  // pop solution
  // remove from the end of the list
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.size === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    this.tail = current;
    this.size--;
    return value;
  }

  // shift solution
  // remove from the start of the list
  shift() {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  // delete solution
  // remove from the middle of the list
  remove(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.size - 1) {
      return this.pop();
    }
}

  // unshift solution
  // add to the start of the list
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  // get solution
  // get the value at a specific index
  get(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  // indexOf solution
  // get the index of a specific value
  indexOf(value) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // contains solution
  // check if the list contains a specific value
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // set solution
  // set the value at a specific index
  set(index, value) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = value;
  }

  // reverse solution
  // reverse the list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // print solution
  // print the list
  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }

  // clear solution
  // clear the list
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // size solution
  // get the size of the list
  size() {
    return this.size;
  }

  // isEmpty solution
  // check if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // toArray solution
  // convert the list to an array
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }


  // fromArray solution
  // create a list from an array
  fromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }

  // toString solution
  // convert the list to a string
  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    result += 'null';
    return result;
  }


  // fromString solution
  // create a list from a string
  fromString(str) {
    const arr = str.split(' -> ');
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }


  // toJSON solution
  // convert the list to a JSON object
  toJSON() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return JSON.stringify(arr);
  }
}


// ----------------------------------------------------------------------------------

// double linked list
class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add to the end of the list
  append(value) {
    const newNode = new DoubleNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }
  // add to the start of the list
  prepend(value) {
    const newNode = new DoubleNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  // add to the middle of the list  
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size) {
      this.append(value);
      return;
    }
    const newNode = new DoubleNode(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
    this.size++;
  }
  // remove from the end of the list
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.size === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }
    const value = this.tail.value;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
    return value;
  }
  // remove from the start of the list
  shift() {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
    return value;
  }
  // remove from the middle of the list
  remove(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.size - 1) {
      return this.pop();
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.size--;
  }
  // get the value at a specific index
  get(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
  // get the index of a specific value  
  indexOf(value) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  // check if the list contains a specific value
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  // set the value at a specific index
  set(index, value) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = value;
  }
  // reverse the list
  reverse() {
    let current = this.head;
    let temp = null;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp) {
      this.head = temp.prev;
    }
  }
  // print the list
  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + ' <-> ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
  // clear the list
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // get the size of the list
  size() {
    return this.size;
  }
  // check if the list is empty
  isEmpty() {
    return this.size === 0;
  }
  // convert the list to an array
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  // create a list from an array
  fromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }
  // convert the list to a string
  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + ' <-> ';
      current = current.next;
    }
    result += 'null';
    return result;
  }
  // create a list from a string
  fromString(str) {
    const arr = str.split(' <-> ');
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }
  // convert the list to a JSON object
  toJSON() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return JSON.stringify(arr);
  }
  // create a list from a JSON object
  fromJSON(json) {
    const arr = JSON.parse(json);
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }
  // get the first node
  getFirst() {
    return this.head;
  }
  // get the last node
  getLast() {
    return this.tail;
  }
  // get the next node
  getNext(node) {
    return node.next;
  }
  // get the previous node
  getPrev(node) {
    return node.prev;
  }
  // get the first node value
  getFirstValue() {
    return this.head ? this.head.value : null;
  }
  // get the last node value
  getLastValue() {
    return this.tail ? this.tail.value : null;
  }
  // get the next node value
  getNextValue(node) {
    return node.next ? node.next.value : null;
  }
  // get the previous node value
  getPrevValue(node) {
    return node.prev ? node.prev.value : null;
  }
  // get the first node index
  getFirstIndex() {
    return 0;
  }
  // get the last node index
  getLastIndex() {
    return this.size - 1;
  }
  // get the next node index
  getNextIndex(node) {
    return node.next ? this.indexOf(node.next.value) : -1;
  }
  // get the previous node index
  getPrevIndex(node) {
    return node.prev ? this.indexOf(node.prev.value) : -1;
  }
}