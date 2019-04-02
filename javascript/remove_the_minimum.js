function removeSmallest(numbers) {
  if (numbers === []) return [];

  const result = [...numbers];
  const index = result.findIndex(el => el === Math.min(...result));
  result.splice(index, 1);
  return result;
}

console.log(removeSmallest([1,2,3,4,5])) // [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])) // [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])) // [2,2,2,1]
