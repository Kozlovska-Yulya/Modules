export const getAdults = (obj) => {
  let result = [];
  Object.entries(obj).forEach(([name, age]) => {
    if (age >= 18) {
      result.push({ [name]: age });
    }
  });

  return result;
};

const object = {
  John: 19,
  Tom: 17,
  Bob: 18,
};
console.log(getAdults(object));
