export default (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let absoluteNum = arr.map((num) => Math.abs(num));
  let getMin = Math.min(...absoluteNum);

  const squaredNum = getMin * getMin;
  return squaredNum;
};
