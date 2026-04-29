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
