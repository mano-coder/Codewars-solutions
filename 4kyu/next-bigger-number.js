function nextBigger(n) {
  const numArr = n.split("");
  numArr[numArr.length - 1] = numArr[numArr.length - 2]
  return numArr;
}

console.log(nextBigger(21))
