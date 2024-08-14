const sum = require('./sum');

test('adds 1 + 2 equal 3', () => {
  expect(sum(2, 1)).toBe(3);
});
