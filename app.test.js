const {sum, multiply} = require('./app');

// Describe the test suite
describe('math functions', () => {
  
  test('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(5, 7)).toBe(12);
  });

  test('should return the multiplicaiton of two numbers', () => {
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(-1, 1)).toBe(-1);
    expect(multiply(5, 7)).toBe(35);
  });
});
