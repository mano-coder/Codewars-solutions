function count(string) {
  const result = {};
  for (const char of string) {
    if (char === " ") continue;
    result[char] = (result[char] || 0) + 1;
  };
  return result;
}

console.log(count("aba fkjlsdfeven twhen thing go wrong jflasj"));
console.log(count("      "));
