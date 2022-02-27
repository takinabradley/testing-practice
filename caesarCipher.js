function caesarCipher(string, num = 0) {
  if(num > 26) {return}
  const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const upperAlpha = lowerAlpha.map(elem => elem.toUpperCase())
  let stringArray = string.split('')

  stringArray = stringArray.map(letter => {
    if(lowerAlpha.includes(letter)) {
      const letterIndex = lowerAlpha.indexOf(letter)
      let newIndex = letterIndex + num
      if(newIndex > 25) {
        newIndex = newIndex - 26
      }
      return lowerAlpha[newIndex]
    } else if(upperAlpha.includes(letter)) {
      const letterIndex = upperAlpha.indexOf(letter)
      let newIndex = letterIndex + num
      if(newIndex > 25) {
        newIndex = newIndex - 26
      }
      return upperAlpha[newIndex]
    } else {
      return letter
    }
  })

  return stringArray.join('')
}

export default caesarCipher