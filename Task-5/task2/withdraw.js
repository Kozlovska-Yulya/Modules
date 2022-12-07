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
