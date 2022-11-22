import sum from './main';
import isEven from './main';
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('even number', () => {
  expect(isEven(2)).toBe(true);
});
