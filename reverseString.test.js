import reverseString from './reverseString.js'

test('reverses a single word', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('reverses a longer string', () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh')
})