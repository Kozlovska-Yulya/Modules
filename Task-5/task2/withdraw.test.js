import { withdraw } from './withdraw.js';

it('should find index of client', () => {
  let personIndex = withdraw(['Kate', 'Yuliia', 'Igor', 'Sasha']);
  expect(personIndex).toEqual('Igor');
});

it('should balance >= amount ', () => {
  let balance = withdraw([100, 35, 80, 12]);
  expect(balance).toEqual([80]);
});

it('should calculate the remaining balance', () => {
  expect(withdraw(80 - 10)).toEqual(70);
});

it('should check if balance < amount ', () => {
  let balance = withdraw([100, 35, 80, 12]);
  expect(balance).toEqual(-1);
});
