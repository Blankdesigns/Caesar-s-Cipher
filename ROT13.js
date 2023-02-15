const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const decipher = function(str) {
  let accumulator = "";
  for (let i = 0; i < str.length; i++) {
    //accounting for non-alphanumeric characters
    const isLetter = alphabets.includes(str[i]);
    if(!isLetter) {
      accumulator += str[i];
    }else {
      const charIndex = alphabets.findIndex((c) => c === str[i]);
      accumulator += alphabets[charIndex + 13] || alphabets[charIndex - 13];
    }
  }
  return accumulator;
  }
