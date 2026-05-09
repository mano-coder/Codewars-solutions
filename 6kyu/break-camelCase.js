/*
Complete the solution so that the function will break up camel casing, 
  using a space between words.
 */

// my solution
function solution(string) {
  return [...string]
    .map((char) => (char === char.toLowerCase() ? char : ` ${char}`))
    .join("");
}

// Pro solution
// function solution(string) {
//   return string.replace(/([A-Z])/g, ` $1`);
// }

console.log(solution("helloThere"));
