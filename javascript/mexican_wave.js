function wave(str){
  const result = [];
  if (str === '') return [];

  const leadingSpaces = str.match(/^\s/) ? str.match(/^\s/).join() : '';

  const lettersCount = str.replace(/\s/g, '').length;

  const characters = str.split();

  let spacesCount = 0

  for (let i = 0; i < lettersCount; i++) {
    let index = i;

    let word = str.replace(/^\s/, '');

    if (word[i] === ' ') {
      i += (1 + spacesCount);
      spacesCount += 1;
    }

    const waved =
      leadingSpaces +
      word.substring(0, i) +
      word.charAt(i).toUpperCase() +

      word.substring(i + 1);

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
