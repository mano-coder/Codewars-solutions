/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.*/

// Solution
function order(phrase) {
  const words = phrase.split(" ");
  words.sort((a, b) => {
    const wordA = a.split("");
    const wordB = b.split("");
    for (const char of wordA) {
      if (!isNaN(char)) a = char;
    }

    for (const char of wordB) {
      if (!isNaN(char)) b = char;
    }
    return a - b;
  });
  return words.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
