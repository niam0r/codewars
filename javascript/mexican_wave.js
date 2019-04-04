// function wave(str){
//   const result = [];
//   if (str === '') return [];

//   const leadingSpaces = str.match(/^\s/) ? str.match(/^\s/).join() : '';

//   const letters = str.replace(/\s/g, '').length;

//   for (let i = 0; i < letters; i++) {
//     let word = str.toLowerCase().replace(/^\s/, '');
//     let index = i;
//     if (word.slice(0, i).match(/\s/g)) {
//       index += word.slice(0, i).match(/\s/g).length;
//     }
//     const waved =
//       leadingSpaces +
//       word.substring(0, index) +
//       word.charAt(index).toUpperCase() +
//       word.substring(index + 1);

//     result.push(waved);
//   }

//   console.log(result)
//   return result;
// }

function wave(str){
  const result = [];
  if (str === '') return [];

  const lettersCount = str.replace(/\s/g, '').length;

  const characters = str.split();

  for (let i = 0; i < lettersCount; i++) {
    let index = i;

    let word = str.replace(/^\s/, '');
    if (word.slice(0, i).match(/\s/g)) {
      index += word.slice(0, i).match(/\s/g).length;
    }
    const waved =
      leadingSpaces +
      word.substring(0, index) +
      word.charAt(index).toUpperCase() +
      word.substring(index + 1);

    result.push(waved);
  }

  console.log(result)
  return result;
}

wave("hello")
// ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
wave("codewars")
// ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
wave("")
// [];
wave("two words")
// ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
wave(" gap ")
// [" Gap ", " gAp ", " gaP "];
