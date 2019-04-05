function tripledouble(num1, num2) {
  const tripleMatch = num1.toString().match(/(\d)\1\1/);
  const doubleMatch = num2.toString().match(/(\d)\1/);

  if (!tripleMatch || !doubleMatch) { return 0; }

  return tripleMatch[0].slice(0, 2) === doubleMatch[0] ? 1 : 0;
}


tripledouble(451999277,41177722899) // 1
tripledouble(1222345, 12345) // 0
tripledouble(12345, 12345) // 0
tripledouble(666789, 12345667) // 1
tripledouble(10560002, 100) // 1
tripledouble(1112, 122) // 0
