function permutations(string) {
  if (string.length === 1) return [string];
  let result = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    let rest = string.split("").filter((_, idx) => idx !== i).join("");
    const subpermutations = permutations(rest);
    for (let fo of subpermutations) {
      result.push([char, fo].join(""));
    }
  }
  return [...new Set(result)];
}

console.log(permutations("abc"));
console.log(permutations("aab"));
console.log(permutations("aabb"));
