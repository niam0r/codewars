function wave(str){
  const result = [];

  str.split('').forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
    }
  });

  return result;
}

function wave(str) {
  const result = [];
  if (str === '') return [];

  const leadingSpaces = str.match(/^\s/) ? str.match(/^\s/).join() : '';
  const lettersCount = str.replace(/\s/g, '').length;
  let spacesCount = 0;

  for (let i = 0; i < (lettersCount + spacesCount); i += 1) {
    const word = str.replace(/^\s/, '');

    while (word[i] === ' ') {
      spacesCount += 1;
      i += 1;
    }

    const waved = leadingSpaces
      + word.substring(0, i)
      + word.charAt(i).toUpperCase()
      + word.substring(i + 1);

    result.push(waved);
  }

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
wave("this is a few words");
