class Calculator {

  constructor(x, y) {
    this.#validateNumber(x)
    this.#validateNumber(y)

    this.x = x
    this.y = y
  }

  #validateNumber(num) {
    if(num === undefined || typeof num !== "number") {
      throw new Error('The parameter was not passed or is an invalid number')
    }
  }

  setX(num) {
    this.#validateNumber(num)
    this.x = num
  }

  setY(num) {
    this.#validateNumber(num)
    this.y = num
  }

  logSum() {
    console.log(this.x + this.y)
  }

  logMul() {
    console.log(this.x * this.y)
  }

  logSub() {
    console.log(this.x - this.y)
  }

  logDiv() {
    if(this.y === 0) {
      throw new Error('The second number is 0')
    }

    console.log(this.x / this.y)
  }
}