import caesarCipher from './caesarCipher'

test('works', () => {
  expect(caesarCipher)
})

test('shifts properly by one', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd')
})

test('shifts strings with non-letter items and spaces', () => {
  expect(caesarCipher('a b c 1', 1)).toBe('b c d 1')
})

test('shifts letters from z to a properly', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza')
  expect(caesarCipher('xyz', 2)).toBe('zab')
})

test('rejects numbers greater than 26', () => {
  expect(caesarCipher('xyz', 27)).toBeUndefined()
})

test('properly shifts all letters', () => {
  expect(caesarCipher('The quick, brown fox jumps over the lazy dog!', 25))
    .toBe('Sgd pthbj, aqnvm enw itlor nudq sgd kzyx cnf!')
})