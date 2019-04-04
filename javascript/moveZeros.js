const moveZeros = (arr) => {
  const result = [];
  const zeros = [];
  arr.forEach(el => el === 0 ? zeros.push(el) : result.push(el));
  return [...result, ...zeros]
}
