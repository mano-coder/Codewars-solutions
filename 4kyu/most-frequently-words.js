function topThreeWords(text) {
  const parsedArr = text
    .replace(/[^\w'\s]/gi, " ")
    .trim()
    .toLowerCase()
    .split(" ");
  const solid = parsedArr;
  let track = [];
  for (let i = 0; i < solid.length; i++) {
    const selected = solid[i];
    let count = 0;

    for (const word of solid) {
      console.log(word)
      if (selected === word) {
        count++;
        track.push(count);
      }
    }
  }
  return solid;
}

console.log(topThreeWords("  //wont won't wOn't "));
