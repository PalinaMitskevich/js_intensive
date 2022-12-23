const selectFromInterval = (numbers, firstIntervalValue, secondIntervalValue) => {
  if(!Array.isArray(numbers) || !numbers.every((elem) => typeof elem === 'number')) {
    throw new Error('Invalid array')
  }

  if(typeof firstIntervalValue !== "number" || typeof secondIntervalValue !== "number" || isNaN(firstIntervalValue) || isNaN(secondIntervalValue)) {
    throw new Error('Invalid interval value')
  }

  const min = Math.min(firstIntervalValue, secondIntervalValue)
  const max = Math.max(firstIntervalValue, secondIntervalValue)

  return numbers.filter((number) => number >= min && number <= max)
}