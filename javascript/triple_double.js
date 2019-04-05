function tripledouble(num1, num2) {
  const tripleMatch = /.{}/.test(num1);
  console.log(tripleMatch)
}


tripledouble(451999277,41177722899) // 1
tripledouble(1222345, 12345) // 0
tripledouble(12345, 12345) // 0
tripledouble(666789, 12345667) // 1
tripledouble(10560002, 100) // 1
tripledouble(1112, 122) // 0
