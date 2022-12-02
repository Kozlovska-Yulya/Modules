import { reverseArray } from './calculator.js';

it('should check if it is array', () => {
  const resultReverseArr = reverseArray(!Array.isArray);
  expect(resultReverseArr).toEqual(null);
});

it('should reverse array', () => {
  const resultReverseArr = reverseArray([2, 4, 6, 8]);
  expect(resultReverseArr).toEqual([8, 6, 4, 2]);
});
