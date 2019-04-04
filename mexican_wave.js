function wave(str){
  const result = [];
  if (str === '') return [];

  const times = str.replace(/\s/g, '').length;
  for (let i = 0; i < times; i++) {
    let word = str.toLowerCase();
    const waved = word.substring(0, i) + word.charAt(i).toUpperCase() + word.substring(i + 1);
    result.push(waved);
  }

  // console.log(result)
  return result;
}

wave("hello")
// ["Hello", "hEllo", "heLlo", "helLo", "hellO"];


// wave("codewars")
// ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]


// wave("")
// [];

// wave("two words")
// ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];

// wave(" gap ")
// [" Gap ", " gAp ", " gaP "];
