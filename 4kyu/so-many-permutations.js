/*
In this kata, your task is to create all permutations of a non-empty input
string and remove duplicates, if present.

Create as many "shufflings" as you can!
*/

// my solution
function permutations(string) {
  if (string.length === 1) return [string];
  let result = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    let rest = string
      .split("")
      .filter((_, idx) => idx !== i)
      .join("");
    const subpermutations = permutations(rest);
    for (let fo of subpermutations) {
      result.push([char, fo].join(""));
    }
  }
  return [...new Set(result)];
}

// clever way
//function permutations(str) {
//  return str.length <= 1
//    ? [str]
//    : Array.from(
//        new Set(
//          str
//            .split("")
//
//            .map((char, i) =>
//              permutations(str.substr(0, i) + str.substr(i + 1)).map(
//                (p) => char + p,
//              ),
//            )
//            .reduce((r, x) => r.concat(x), []),
//        ),
//      );
//}

console.log(permutations("abc"));
console.log(permutations("aab"));
console.log(permutations("aabb"));
