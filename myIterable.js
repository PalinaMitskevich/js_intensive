const myIterable = { from: 1, to: 4 }

myIterable[Symbol.iterator] = function() {
  if (!this.from
    || !this.to
    || typeof this.from !== 'number'
    || typeof this.to !== 'number'
    || isNaN(this.from)
    || isNaN(this.to)
    || this.from > this.to
  ) {
    throw new Error('Invalid from or to')
  }

  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    }
  }
}