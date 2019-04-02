function deleteNth(arr,n){
  const counts = {};
  arr.forEach(num => counts[num] = counts[num] ? counts[num] += 1 : 1);

  arr.reverse()

  Object.keys(counts).forEach((key) => {
    while (counts[key] > n ) {
      let index = arr.findIndex(el => el === parseInt(key));
      arr.splice(index, 1);
      counts[key] -= 1;
    }
  })

  return arr.reverse();
}

console.log(deleteNth([20,37,20,21], 1)) // [20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // [1, 1, 3, 3, 7, 2, 2, 2]
