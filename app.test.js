// app.test.js

// Import the function to be tested
const sum = require('./app');

// Describe the test suite
describe('sum function', () => {
  // Individual test case
  test('should return the sum of two numbers', () => {
    // Assert that the sum of 1 and 2 is 3
    expect(sum(1, 2)).toBe(3);
    // Add more test cases if needed
    expect(sum(-1, 1)).toBe(0);
    expect(sum(5, 7)).toBe(12);
  });
});
