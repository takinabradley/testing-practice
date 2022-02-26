function analyzeArray(array) {
  if (
      !Array.isArray(array) ||
      array.some((num) => isNaN(num)) || 
      array.some((num) => num === '') ||
      array.some((num) => Array.isArray(num)) ||
      array.length === 0
  ) {
    return undefined
  }

  const total = array.reduce((current, next) => {
    return current + next
  }, 0)

  const average = total/array.length;

  const min = array.reduce((prev, current) => {
    if(current < prev) {
      return current
    } else {
      return prev
    }
  }, Infinity)

  const max = array.reduce((prev, current) => {
    if(current > prev) {
      return current
    } else {
      return prev
    }
  }, 0)

  return {
    average,
    min,
    max,
    length: array.length
  }
}

export default analyzeArray