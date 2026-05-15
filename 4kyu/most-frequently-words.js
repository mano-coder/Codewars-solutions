function topThreeWords(text) {
  const parsedArr = text
    .replace(/[^a-zA-Z'\s]+/gi, " ")
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => /[a-zA-Z]/gi.test(word));
  let map = {};
  for (const word of parsedArr) {
    map[word] = (map[word] || 0) + 1;
  }
  return Object.entries(map).sort((a, b) => b[1] - a[1])
      .map(item => item[0])
      .slice(0,3)
}

console.log(topThreeWords("  //wont   won't   _    wOn't  wOn't wOn't wOn't"));
