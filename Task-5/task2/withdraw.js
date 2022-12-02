export const withdraw = (clients, balances, client, amount) => {
  let personIndex = clients.findIndex((person) => person === client);
  console.log(personIndex);
  if (balances[personIndex] >= amount) {
    let result = balances[personIndex] - amount;
    return result;
  } else {
    return -1;
  }
};

let clientsArray = ['Kate', 'Yuliia', 'Igor', 'Sasha'];
let balancesArray = [100, 35, 80, 12];

let client1 = 'Igor';
let amountClient1 = 10;

const resultWithdraw = withdraw(
  clientsArray,
  balancesArray,
  client1,
  amountClient1
);
console.log(resultWithdraw);
