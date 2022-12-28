class Node{
  constructor(value){
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList{
  size = 0

  constructor(){
    this.head = null
    this.tail = null
  }

  get size () {
    return this.size
  }

  head() {
    return this.head
  }

  add(value) {
    let newNode = new Node(value)

    if (!this.head){
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

    this.size++

    return this
  }

  remove(value) {
    if (!this.head) return null

    let counter = 0
    let current = this.head

    while (counter < this.size) {
      if (current.value === value) {
        if (counter === 0) {
          const nextNode = current.next
          nextNode.prev = null
          this.head = nextNode
          this.size--

          return this
        }

        if (counter === this.size - 1) {
          current.prev.next = null
          this.tail = current.prev
          this.size--

          return this
        }

        current.prev.next = current.next
        current.next.prev = current.prev
        this.size--

        return this
      } else {
        counter++
        current = current.next
      }
    }

    return this
  }

  indexOf(value) {
    let counter = 0
    let current = this.head

    while (counter < this.size) {
      if (current.value === value) {
        return counter
      } else {
        counter++
        current = current.next
      }
    }
  }

  elementAt(index) {
    if (index < 0 || index >= this.size) return null

    let counter = 0
    let current = this.head

    while (counter !== index) {
      counter++
      current = current.next
    }

    return current
  }

  addAt(index, value) {
    if (index < 0 || index >= this.size) return null

    let newNode = new Node(value)
    let counter = 0
    let current = this.head

    if (index === 0) {
      newNode.next = current
      current.prev = newNode
      this.head = newNode
      this.size++

      return this
    }

    if (index === this.size -1) {
      newNode.prev = this.tail.prev
      newNode.next = this.tail
      this.tail.prev.next = newNode
      this.tail.prev = newNode
      this.size++

      return this
    }

    while (counter !== index) {
      counter++
      current = current.next
    }

    newNode.prev = current.prev
    newNode.next = current

    current.prev.next = newNode
    current.prev = newNode
    this.size++

    return this
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return null

    if (index === 0) {
      this.head.next.prev = null
      this.head = this.head.next
      this.size--

      return this
    }

    if (index === this.size - 1) {
      this.tail = this.tail.prev
      this.tail.next = null
      this.size--

      return this
    }

    let counter = 0
    let current = this.head

    while (counter !== index) {
      counter++
      current = current.next
    }

    current.prev.next = current.next
    current.next.prev = current.prev
    this.size--

    return this
  }
}