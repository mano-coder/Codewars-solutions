// Given a string, replace every letter with its position in the alphabet.
//my solution
function alphabetPosition(text) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const arr = [...text];
  let result = [];
  arr.map((char) => {
    char = char.toLowerCase();
    if (!alpha.includes(char)) return;
    result.push(alpha.indexOf(char) + 1);
  });
  return result.join(" ");
}

// pro solution
/*
function alphabetPosition(text) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return text
    .toLowerCase()
    .split("")
    .filter((letter) => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    })
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(" ");
}
*/

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
