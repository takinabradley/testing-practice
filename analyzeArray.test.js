import analyzeArray from "./analyzeArray";

test("returns an object with 'average', 'min', 'max', and 'length' properties", () => {
  expect(analyzeArray([1])).toHaveProperty('average')
  expect(analyzeArray([2])).toHaveProperty('min')
  expect(analyzeArray([3])).toHaveProperty('max')
  expect(analyzeArray([4])).toHaveProperty('length')
})

test("rejects an empty array", () => {
  expect(analyzeArray([])).toBeUndefined()
})

test("rejects an array containing non-numberic values", () => {
  expect(analyzeArray([''])).toBeUndefined()
  expect(analyzeArray([1, 2, 'three']))
  expect(analyzeArray([{} , 1, 2])).toBeUndefined()
  expect(analyzeArray([1, [], 3])).toBeUndefined()
})

test("rejects non-array values", () => {
  expect(analyzeArray(1)).toBeUndefined()
  expect(analyzeArray({})).toBeUndefined()
  expect(analyzeArray('one')).toBeUndefined()
})

test("correctly returns 'average', 'min', 'max', and 'length' properties", () => {
  const expectedObject = {
    average: 0,
    min: 0,
    max: 0,
    length: 1
  }
  expect(analyzeArray([0])).toEqual(expectedObject)
})

test("correctly returns 'average', 'min', 'max', and 'length' properties", () => {
  const expectedObject = {
    average: 1,
    min: 1,
    max: 1,
    length: 1
  }
  expect(analyzeArray([1])).toEqual(expectedObject)
})

test("correctly returns 'average', 'min', 'max', and 'length' properties", () => {
  const expectedObject = {
    average: 2,
    min: 1,
    max: 3,
    length: 3
  }
  expect(analyzeArray([1, 2, 3])).toEqual(expectedObject)
})

test("correctly returns 'average', 'min', 'max', and 'length' properties", () => {
  const expectedObject = {
    average: 3.5,
    min: 1,
    max: 6,
    length: 6
  }

  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toEqual(expectedObject)
})

test("correctly returns 'average', 'min', 'max', and 'length' properties", () => {
  const expectedObject = {
    average: 3.5,
    min: 1,
    max: 6,
    length: 6
  }

  expect(analyzeArray([6, 5, 4, 3, 2, 1])).toEqual(expectedObject)
})

test("correctly returns 'average', 'min', 'max', and 'length' properties", () => {
  const expectedObject = {
    average: 3.5,
    min: 1,
    max: 6,
    length: 6
  }

  expect(analyzeArray([6, 5, 4, 3, 2, 1])).toEqual(expectedObject)
})

test("works with negative numbers", () => {
  const expectedObject = {
    average: 0,
    min: -1,
    max: 1,
    length: 3
  }

  expect(analyzeArray([-1, 0, 1])).toEqual(expectedObject)
})