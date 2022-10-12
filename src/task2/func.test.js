const func = require('./func');

describe("find a", () => {
  test('a and b index 5', () => {
    expect(func("abcdef", 'f', 'f')).toBe(5);
  });

  test('a index 0, b -1', () => {
    expect(func("abcdef", 'a', 'z')).toBe(0);
  });

  test('a index 5, b 3', () => {
    expect(func("abcdef", 'f', 'd')).toBe(5);
  });
})

describe("find b", () => {
  test('b index 5, a 0', () => {
    expect(func("abcdef", 'a', 'f')).toBe(5);
  });

  test('b index 0, a -1', () => {
    expect(func("abcdef", 'z', 'a')).toBe(0);
  });
})

describe("find nothing", () => {
  test('find nothing', () => {
    expect(func("abcdef", 'z', 'y')).toBe(-1);
  });
})