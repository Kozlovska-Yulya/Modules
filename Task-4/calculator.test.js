import { calc } from './calculator.js';

it('should check if it is not string', () => {
  const result = calc(!'String');
  expect(result).toEqual(null);
});

it('should calculate numbers', () => {
  expect(calc('6 + 5')).toEqual('6 + 5 = 11');
});

it('should calculate numbers', () => {
  expect(calc('6 - 5')).toEqual('6 - 5 = 1');
});

it('should calculate numbers', () => {
  expect(calc('6 * 5')).toEqual('6 * 5 = 30');
});

it('should calculate numbers', () => {
  expect(calc('6 / 5')).toEqual('6 / 5 = 1.2');
});
