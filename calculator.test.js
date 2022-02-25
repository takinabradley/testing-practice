import calculator from "./calculator"

test('is an object with add, subtract, divide, and multiply properties', () => {
  expect(calculator).toHaveProperty('add')
  expect(calculator).toHaveProperty('subtract')
  expect(calculator).toHaveProperty('multiply')
  expect(calculator).toHaveProperty('divide')
})

//add tests
test('adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3)
})

test("doesn't add strings", () => {
  expect(calculator.add('hello', 'there')).toBeUndefined()
})

test('works correctly with negative numbers', () => {
  expect(calculator.add(-1, -2)).toBe(-3)
})

test('works correctly with negative and positive numbers', () => {
  expect(calculator.add(-1, 2)).toBe(1)
})

//subtract tests
test('adds two numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1)
})

test('works correctly with negative numbers', () => {
  expect(calculator.subtract(-1, -2)).toBe(1)
})

test('works correctly with negative and positive numbers', () => {
  expect(calculator.subtract(-1, 2)).toBe(-3)
})

//divide tests
test('adds two numbers', () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(.5)
})

test('works correctly with negative numbers', () => {
  expect(calculator.divide(-1, -2)).toBeCloseTo(.5)
})

test('works correctly with negative and positive numbers', () => {
  expect(calculator.divide(-1, 2)).toBeCloseTo(-.5)
})

//multiply tests
test('adds two numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2)
})

test('works correctly with negative numbers', () => {
  expect(calculator.multiply(-1, -2)).toBe(2)
})

test('works correctly with negative and positive numbers', () => {
  expect(calculator.multiply(-1, 2)).toBe(-2)
})