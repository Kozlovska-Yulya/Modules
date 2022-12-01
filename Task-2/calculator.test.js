import getSum, { getSquaredNumbers, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result = getSquaredNumbers([2, 3, 4, 5]);
  expect(result).toEqual([4, 9, 16, 25]);
});

it('should get only odd numbers', () => {
  const result = getOddNumbers([2, 3, 4, 5]);
  expect(result).toEqual([3, 5]);
});

it('should get sumed numbers', () => {
  const result = getSum(2, 5);
  expect(result).toEqual(7);
});
