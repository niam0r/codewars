function sqInRect(lng, wdth) {
  if (lng === wdth) { return null; }

  const squares = [];

  while (wdth !== lng) {
    if (wdth > lng) {
      squares.push(lng);
      wdth -= lng;
    } else if (lng > wdth) {
      squares.push(wdth);
      lng -= wdth;
    }
  }
  squares.push(wdth);

  return squares;
}



console.log(sqInRect(5, 3)) // [3, 2, 1, 1]
console.log(sqInRect(3, 5)) // [3, 2, 1, 1]
console.log(sqInRect(20, 14)) // [14, 6, 6, 2, 2, 2])
