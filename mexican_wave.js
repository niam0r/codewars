function wave(str){
  const result = [];
  if (str === '') return [];

  const times = str.replace(/\s/g, '').length;

  for (let i = 0; i <= times; i++) {
    result.push(str.toLowerCase());
  }

  result.map((word, i) => {
    console.log(word)
    console.log(i)
    const letters = word.split('');
    console.log(letters)
    letters[i].toUpperCase();
    return letters.join();
  })

  console.log(result)
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
