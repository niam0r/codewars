function tripledouble(num1, num2) {
  const tripleMatches = num1.toString().match(/(\d)\1\1/g);
  const doubleMatches = num2.toString().match(/(\d)\1/g);

  if (!tripleMatches || !doubleMatches) { return 0; }

  const match = tripleMatches.some((triple) => {
    return doubleMatches.some(double => triple.slice(0, 2) === double)
  })

  return match ? 1 : 0;
}


tripledouble(451999277,41177722899) // 1
tripledouble(1222345, 12345) // 0
tripledouble(12345, 12345) // 0
tripledouble(666789, 12345667) // 1
tripledouble(10560002, 100) // 1
tripledouble(1112, 122) // 0
