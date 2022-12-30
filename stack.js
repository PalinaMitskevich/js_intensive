class Stack {
  storage = {}
  currentIndex = 0

  push(item) {
    this.storage[this.currentIndex] = item
    this.currentIndex++
  }

  pop() {
    if (Object.keys(this.storage).length === 0) {
      return
    }

    const value = this.storage[this.currentIndex - 1]
    delete this.storage[this.currentIndex - 1]
    this.currentIndex--
    return value
  }

  get peek() {
    return this.storage[this.currentIndex - 1]
  }

  get size() {
    return this.currentIndex
  }

  get isEmpty() {
    return Object.keys(this.storage).length === 0
  }
}
