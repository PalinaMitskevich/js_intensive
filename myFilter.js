Array.prototype.myFilter = function (callback, context) {
  const filtered = []

  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      filtered.push(this[i])
    }
  }

  return filtered
}