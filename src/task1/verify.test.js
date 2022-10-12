const verify = require('./verify');

describe("Correct lines", () => {
  test('---(++++)----', () => {
    expect(verify("---(++++)----")).toBe(1);
  });

  test('', () => {
    expect(verify("")).toBe(1);
  });

  test('before ( middle []) after ', () => {
    expect(verify("before ( middle []) after ")).toBe(1);
  });

  test('(  [  <>  ()  ]  <>  )', () => {
    expect(verify("(  [  <>  ()  ]  <>  )")).toBe(1);
  });
})

describe("Incorrect lines", () => {
  test(') (', () => {
    expect(verify(") (")).toBe(0);
  });

  test('<(   >)', () => {
    expect(verify("<(   >)")).toBe(0);
  });

  test('   (      [)', () => {
    expect(verify("   (      [)")).toBe(0);
  });
})