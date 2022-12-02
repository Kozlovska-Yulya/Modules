import { calc } from './calculator.js';

it('should calculate numbers', () => {
  const result = calc(!'String');
  expect(result).toEqual(null);
});

it('should calculate numbers', () => {
  const result = calc(4, '+', 6);
  expect(result).toEqual('10');
});
