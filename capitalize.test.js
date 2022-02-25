import capitalize from './capitalize.js'

test("capitalizes first letter", () => {
  expect(capitalize('hello')).toBe('Hello')
})

test("works with spaces", () => {
  expect(capitalize('hello world')).toBe('Hello world')
})