function createDebounceFunction (callback, delay) {
  let timer

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}