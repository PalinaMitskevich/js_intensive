const makeObjectDeepCopy = (obj) => {
  const copy = {}
  const keys = Object.keys(obj)

  keys.forEach((key) => {
    const value = obj[key]

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        copy[key] = Object.values(makeObjectDeepCopy(value))
      } else {
        copy[key] = makeObjectDeepCopy(value)
      }
    } else {
      copy[key] = value
    }
  })

  return copy
}