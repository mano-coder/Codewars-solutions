const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-.-.-": ".",
  "-..-.": "/",
  "..--.-": "_",
  "...---...": "SOS",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};

function decodeMorse(morseCode) {
  const wordsArr = morseCode.trim().split("   ");
  const result = [];
  wordsArr.forEach((word) => {
    const letterArr = word.trim().split(" ");
    let newWord = "";
    for (let letter of letterArr) {
      newWord += MORSE_CODE[letter];
    }
    result.push(newWord);
  });

  return result.join(" ");
}

// Pro solution
// function decodeMorse(morseCode) {
//   const decodeMorseLetter = (letter) => {
//     return MORSE_CODE[letter];
//   };
//   const decodeMorseWord = (word) => {
//     return word.split(" ").map(decodeMorseLetter).join("");
//   };
//   return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
// }

console.log(decodeMorse("  .... . .--   .--- ..- -.. . ....   . .... . .--"));
console.log(decodeMorse("   .... . -.--   "));
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
