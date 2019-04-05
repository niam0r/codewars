function duplicateCount(text){
  const characters = text.toLowerCase().split('');
  const counts = {};
  console.log(characters)
  characters.forEach(char => counts[char] = counts[char] ? counts[char] + 1 : 1);

  return Object.values(characters).filter(val => val > 1).length;
}

duplicateCount("") // 0
duplicateCount("abcde") // 0
duplicateCount("aabbcde") // 2
duplicateCount("aabBcde") // 2 should ignore case");
duplicateCount("Indivisibility") // 1
duplicateCount("Indivisibilities") // 2 "characters may not be adjacent")
