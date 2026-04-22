function order(phrase) {
  const words = phrase.split(" ");
  words.sort((a, b) => {
    const wordA = a.split("");
    const wordB = b.split("");
    for (const char of wordA)  {
      if (!isNaN(char)) a = char;
    }

    for (const char of wordB)  {
      if (!isNaN(char)) b = char;
    }
    return a - b
  });
  return words.join(" ")
}

console.log(order("is2 Thi1s T4est 3a"));
