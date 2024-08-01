const sum = require('./app');

// Describe the test suite
describe('sum function', () => {
  // Individual test case
  test('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(5, 7)).toBe(12);
  });
});
