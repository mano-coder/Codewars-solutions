function solution(string) {
  return [...string]
    .map((char) => (char === char.toLowerCase() ? char : ` ${char}`))
    .join("");
}

console.log(solution("helloThere"));
