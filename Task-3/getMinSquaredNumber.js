export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let absoluteNum = arr.map((num) => Math.abs(num));
  let getMin = Math.min(...absoluteNum);

  const squaredNum = Math.pow(getMin, 2);
  return squaredNum;
};
