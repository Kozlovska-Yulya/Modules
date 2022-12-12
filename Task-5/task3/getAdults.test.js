import { getAdults } from './getAdults.js';

it('should get person who have only 18+ age ', () => {
  let result = getAdults({ John: 19, Tom: 17, Bob: 18 });
  expect(result).toEqual([{ John: 19 }, { Bob: 18 }]);
});

it('should return emty object if object is empty', () => {
  let result = getAdults([]);
  expect(result).toEqual([]);
});

it('should check if contain function getAdults ', () => {
  let result = getAdults({ John: 19, Tom: 17, Bob: 18 });
  expect(result).toBeDefined();
});
