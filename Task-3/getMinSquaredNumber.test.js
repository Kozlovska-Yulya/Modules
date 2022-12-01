import getMinSquaredNumber from './getMinSquaredNumber';

it('Should get min squared absolute number', () => {
  const emptyArr = getMinSquaredNumber([]);
  expect(emptyArr).toEqual(null);
});

it('Should get min squared absolute number', () => {
  const string = getMinSquaredNumber('String');
  expect(string).toEqual(null);
});

it('Should get min squared absolute number', () => {
  const getSquaredNum = getMinSquaredNumber([-222, 4, 6, -12, 88]);
  expect(getSquaredNum).toEqual([16]);
});
