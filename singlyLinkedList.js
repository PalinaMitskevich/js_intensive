class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  head() {
    return this.head
  }

  add(value){
    let newNode = new Node(value)

    if(!this.head){
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  remove(value) {
    if (!this.head) {
      return null
    }
    let deletedNode = null
    while (this.head && this.head.value === value) {
      deletedNode = this.head
      this.head = this.head.next
    }
    let currentNode = this.head
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
      this.length--
    }
    if (this.tail && this.tail.value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }

  indexOf(value) {
    let counter = 0
    while(counter < this.length){
      if (this.elementAt(counter).value === value) {
        return counter
      } else {
        counter++
      }
    }
  }

  elementAt(index) {
    if(index < 0 || index >= this.length) return null
    let counter = 0
    let current = this.head
    while(counter !== index){
      current = current.next
      counter++
    }
    return current
  }

  addAt(index, value) {
    const newNode = new Node(value)
    if(index < 0 || index > this.length) return false
    if(index === this.length) return !!this.add(value)
    if(index === 0) {
      if(!this.head) {
        this.head = newNode
        this.tail = this.head
      }
      newNode.next = this.head
      this.head = newNode
      this.length++
      return this
    }

    let prev = this.elementAt(index - 1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
  }

  removeAt(index) {
    if(index < 0 || index >= this.length) return null
    if (index === 0) {
      this.head = this.head.next
      this.length--
      return this
    }
    let counter = 0
    let current = this.head
    let prev
    while (counter < this.length) {
      if (counter !== index) {
        prev = current
        current = current.next
        counter++
      } else {
        prev.next = current.next
        this.length--
      }
    }
    return this
  }
}
