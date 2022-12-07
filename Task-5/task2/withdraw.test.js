import { withdraw } from './withdraw.js';

it('should find index of client', () => {
  let personIndex = withdraw(
    ['Kate', 'Yuliia', 'Igor', 'Sasha'],
    [100, 35, 80, 12],
    'Igor',
    10
  );
  expect(personIndex).toEqual(70);
});

it('should check if balance < amount ', () => {
  let balance = withdraw(
    ['Kate', 'Yuliia', 'Igor', 'Sasha'],
    [100, 35, 80, 12],
    'Kate',
    200
  );
  expect(balance).toEqual(-1);
});

it('should check if contain function withdraw ', () => {
  let result = withdraw(
    ['Kate', 'Yuliia', 'Igor', 'Sasha'],
    [100, 35, 60, 12],
    'Igor',
    10
  );
  expect(result).toBeDefined();
});
