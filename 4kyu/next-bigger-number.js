function nextBigger(n) {
  const arr = String(n).split("");
  const len = arr.length

  let i = len - 2;
  while (i >= 0 && arr[i] > arr[i+1]) i--;

  if (i < 0) return -1;

  let j = len - 1;

  while (arr[j] <= arr[i]) j--;

  [arr[i], arr[j] = arr[j], arr[i]];

  const suffix = arr.splice(i + 1).reverse()

  arr.push(...suffix)

  return Number(arr.join(""))

}

console.log(nextBigger(1234567908))
console.log(nextBigger(1731))
console.log(nextBigger(2017))
console.log(nextBigger(144))
console.log(nextBigger(2144))
console.log(nextBigger(111))
console.log(nextBigger(9))
console.log(nextBigger(531))
