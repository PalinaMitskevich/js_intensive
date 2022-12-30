class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.last = 0;
  }
  enqueue(item) {
    this.items[this.last] = item;
    this.last++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  peek() {
    return this.items[this.front];
  }
  get size() {
    return this.last - this.front;
  }
  isEmpty() {
    return this.last == 0;
  }
}